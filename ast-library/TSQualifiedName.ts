//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';

export default class TSQualifiedName extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.left?.name && this.obj?.right?.name) {
      returnVal += `${this.obj?.left.name}.${this.obj?.right.name}`;
    }
    return returnVal;
  }
}
