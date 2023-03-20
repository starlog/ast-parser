//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class ImportDeclaration extends ast {
  toString() {
    let returnVal = '';
    if(this.obj?.specifiers || this.obj?.source){
      let returnVal1 = '';
      let returnVal2 = '';
      let returnVal3 = '';
      if (this.obj?.specifiers) {
        this.obj.specifiers.forEach((x) => {
          const myObject = CreateDynamicASTClass(x);
          if (myObject.obj.type === 'ImportDefaultSpecifier' || myObject.obj.type === 'ImportNamespaceSpecifier') {
            returnVal3 += `${myObject.get()},`;
          } else {
            returnVal2 += `${myObject.get()},`;
          }
        });
      }
      if (returnVal2.length > 0) {
        returnVal2 = returnVal2.slice(0, -1);
        returnVal2 = `{${returnVal2}}`;
      }
      if (returnVal3.length > 0) {
        returnVal3 = returnVal3.slice(0, -1);
      }
      if (this.obj?.source) {
        const myObject = CreateDynamicASTClass(this.obj.source);
        returnVal1 += `${myObject.get()}`;
      }
      let finalReturn = 'import ';
      if (returnVal3.length > 0) {
        if (returnVal2.length > 0) {
          finalReturn += `${returnVal3}, `;
        } else {
          finalReturn += `${returnVal3} `;
        }
      }
      if (returnVal2.length > 0) {
        finalReturn += `${returnVal2} `;
      }
      finalReturn += `from '${returnVal1}'`;
      returnVal += finalReturn;
    }
    return returnVal;
  }
}
