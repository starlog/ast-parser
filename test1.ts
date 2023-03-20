//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import * as fs from 'fs';
import * as parser from '@babel/parser';
import { getLogger, setLevel } from './ast-library/logger';
import {
  CreateDynamicASTClass,
  utilASTRemoveLocationInfo,
} from './ast-library/CreateDynamicASTClass';

const jp = require('jsonpath');

const logger = getLogger();

const filePrefix = '/home/felix/src/granada-user-app/src/components/';
const targetFiles = [
  'UI013.tsx',
];

function title(titleString) {
  console.log(titleString);
  console.log('-------------------------------------------------------------------------------------');
}

//----------------------------------------------------------------------------------------------------------------------
// Main loop
//----------------------------------------------------------------------------------------------------------------------
// eslint-disable-next-line no-restricted-syntax
for (const element of targetFiles) {
  const code = fs.readFileSync(`${filePrefix}${element}`, 'utf8');
  console.log('#####################################################################################');
  console.log(`Processing: ${element}`);
  console.log('#####################################################################################');
  const codeData = parser.parse(code, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  });

  utilASTRemoveLocationInfo(codeData); // Erasing all location information for easy analysis

  //------------------------------------------------------------------------------------------------
  // Import 구문 분석, 개별 클래스 방식
  //------------------------------------------------------------------------------------------------
  title('Import statements');
  // Get target object
  const importSpecifiers = jp.query(codeData, '$.program.body[?(@.type === "ImportDeclaration")]');
  importSpecifiers.forEach((importElement) => {
    // Process import statement
    const myObject = CreateDynamicASTClass(importElement);
    logger.debug(myObject.get());
    if (importElement.trailingComments) {
      importElement.trailingComments.forEach((x) => {
        const myObject2 = CreateDynamicASTClass(x);
        logger.debug(`//${myObject2.get()}`);
      });
    }
  });
  logger.debug('\n\n');

  //------------------------------------------------------------------------------------------------
  // Typescript Type Alias 정의 구문 분석, 개별 클래스 방식
  //------------------------------------------------------------------------------------------------
  title('Typescript Type');
  // Get target object
  const TSTypeAliasDeclaration = jp.query(codeData, '$.program.body[?(@.type === "TSTypeAliasDeclaration")]');
  TSTypeAliasDeclaration.forEach((x) => {
    logger.debug(`type ${x.id.name} = {`);
    if (x.typeAnnotation && x.typeAnnotation.members) { // 당연히 있어야 함
      x.typeAnnotation.members.forEach((y) => {
        // Process type statement
        const myObj = CreateDynamicASTClass(y);
        // Process comments
        let trailingComment = '';
        if (y.trailingComments) {
          y.trailingComments.forEach((z) => {
            const myObject = CreateDynamicASTClass(z);
            if (myObject.obj?.type === 'CommentLine') {
              trailingComment += `  //${myObject.get()}`;
            } else {
              trailingComment += `${myObject.get()}`;
            }
          });
        }
        logger.debug(`  ${myObj.get()};${trailingComment}`);
      });
    }
  });
  logger.debug('\n\n');

  //------------------------------------------------------------------------------------------------
  // ExportDefaultDeclaration 정의 구문 분석, 개별 클래스 방식
  //------------------------------------------------------------------------------------------------
  title('ExportDefaultDeclaration');
  const ExportDefaultDeclaration = jp.query(codeData, '$.program.body[?(@.type === "ExportDefaultDeclaration")]');
  ExportDefaultDeclaration.forEach((exportDefaultItem) => {
    const myObject = CreateDynamicASTClass(exportDefaultItem);
    console.log(myObject.get());
  });
  console.log('\n\n');

  setLevel('debug');
  //------------------------------------------------------------------------------------------------
  // VariableDeclaration 정의 구문 분석, 개별 클래스 방식
  //------------------------------------------------------------------------------------------------
  title('VariableDeclaration');
  const VariableDeclaration = jp.query(codeData, '$.program.body[?(@.type === "VariableDeclaration")]');
  VariableDeclaration.forEach((variableItem) => {
    const myObject = CreateDynamicASTClass(variableItem);
    console.log(myObject.get());
    console.log('');
  });
  console.log('\n\n');
}
