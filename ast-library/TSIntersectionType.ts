//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class TSIntersectionType extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.types) {
      this.obj?.types.forEach((x) => {
        const myObject = CreateDynamicASTClass(x);
        returnVal += `${myObject.get()} & `;
      });
      returnVal = `${returnVal.slice(0, -2)} `;
    }
    return returnVal;
  }
}
