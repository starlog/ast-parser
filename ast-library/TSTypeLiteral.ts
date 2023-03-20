//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class TSTypeLiteral extends ast {
  toString() {
    let returnString = '';
    if (this.obj?.members) {
      let isMultiple = false;
      if (this.obj?.members.length > 1) {
        isMultiple = true;
      }
      this.obj?.members.forEach((x) => {
        const myObject = CreateDynamicASTClass(x);
        returnString += myObject.get();
        if (isMultiple) {
          returnString += ', ';
        }
      });
      if (isMultiple) {
        returnString = returnString.slice(0, -2);
      }
      returnString = `{ ${returnString} }`;
    }
    return returnString;
  }
}
