//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';

export default class BooleanLiteral extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.value) {
      returnVal += `${this.obj.value}`;
    }
    return returnVal;
  }
}
