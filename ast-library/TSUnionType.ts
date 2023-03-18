//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class TSUnionType extends ast {
  toString() {
    let returnVal = '';
    let isFirst = true;
    this.obj?.types.forEach((x) => {
      const myObject = CreateDynamicASTClass(x);
      if (isFirst) {
        returnVal += `${myObject.get()}`;
        isFirst = false;
      } else {
        returnVal += ` | ${myObject.get()}`;
      }
    });
    return returnVal;
  }
}
