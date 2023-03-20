//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class ArrayPattern extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.elements) {
      this.obj.elements.forEach((x) => {
        const myObject = CreateDynamicASTClass(x);
        returnVal += `${myObject.get()}, `;
      });
      returnVal = returnVal.slice(0, -2);
      returnVal = `[${returnVal}]`;
    }
    return returnVal;
  }
}
