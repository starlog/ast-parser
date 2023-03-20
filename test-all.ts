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
setLevel('debug');
const filePrefix = '/home/felix/src/granada-user-app/src/components/';
const targetFiles = [
  'BLANK.tsx',
  'HTMLTAGVIEW.tsx',
  'NAV001.tsx',
  'NAV002.tsx',
  'NAV003.tsx',
  'SubHeader.tsx',
  'UI001.tsx',
  'UI002.tsx',
  'UI003.tsx',
  'UI004.tsx',
  'UI005.stories.tsx',
  'UI005.tsx',
  'UI006.tsx',
  'UI007.tsx',
  'UI008.tsx',
  'UI009.tsx',
  'UI010.tsx',
  'UI011.tsx',
  'UI012.tsx',
  'UI013.tsx',
  'UI014.tsx',
  'UI015.tsx',
  'UI017.tsx',
  'UI018.tsx',
  'UI019.tsx',
  'UI021.tsx',
  'UI022.tsx',
  'UI025.tsx',
  'UI026.tsx',
  'UI027.tsx',
  'UI028.tsx',
  'UI029.tsx',
  'UI030.tsx',
  'UI031.tsx',
  'UI033.tsx',
  'UI034.tsx',
  'UI036.tsx',
  'UI037.tsx',
  'UI038.tsx',
  'UI039.tsx',
  'UI040.tsx',
  'UI041.tsx',
  'UI042.tsx',
  'UI043.tsx',
  'UI044.tsx',
  'UI045.tsx',
  'UI046.tsx',
  'UI047.tsx',
  'UI048.tsx',
  'UI049.tsx',
  'UI050.tsx',
  'UI051.tsx',
  'UI052.tsx',
  'UI053.tsx',
  'UI054.tsx',
  'UI055.tsx',
  'UI056.tsx',
  'UI057.stories.tsx',
  'UI057.tsx',
  'UI058.tsx',
  'UI059.tsx',
  'UI060.tsx',
  'UI061.tsx',
  'UI062.tsx',
  'UI063.tsx',
  'UI064.tsx',
  'UI065.tsx',
  'UI066.tsx',
  'UI067.tsx',
  'UI068.tsx',
  'UI069.tsx',
  'UI070.tsx',
  'UI071.tsx',
  'UI072.tsx',
  'UI073.tsx',
  'UI074.tsx',
  'UI075.tsx',
  'UI076.tsx',
  'UI077.tsx',
  'UI078.tsx',
  'UI079.tsx',
  'UI080.tsx',
  'UI081.tsx',
  'UI082.tsx',
  'UI083.tsx',
  'UI084.tsx',
  'UI085.tsx',
  'UI086.tsx',
  'UI087.tsx',
  'UI088.tsx',
  'UI089.tsx',
  'UI090.tsx',
  'UIDivider.tsx',
  'WEBVIEW.tsx',
  'WRAPPER.tsx',
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

  // utilASTRemoveLocationInfo(codeData); // Erasing all location information for easy analysis

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

  //------------------------------------------------------------------------------------------------
  // VariableDeclaration 정의 구문 분석, 개별 클래스 방식
  //------------------------------------------------------------------------------------------------
  title('VariableDeclaration');
  const VariableDeclaration = jp.query(codeData, '$.program.body[?(@.type === "VariableDeclaration")]');
  VariableDeclaration.forEach((variableItem) => {
    const myObject = CreateDynamicASTClass(variableItem);
    console.log(myObject.get());
  });
  console.log('\n\n');
}
