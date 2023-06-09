//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class TSTupleType extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.elementTypes) {
      this.obj?.elementTypes.forEach((x) => {
        const myObject = CreateDynamicASTClass(x);
        returnVal += `${myObject.get()};`;
      });
      returnVal = returnVal
        .replace(',', '#')
        .replace(';', ',')
        .replace('#', ';');
      returnVal = `[${returnVal} ]`;
    }
    return returnVal;
  }
}
