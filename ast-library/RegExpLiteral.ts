//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';

export default class RegExpLiteral extends ast {
  toString() {
    let returnVal = '';
    let pattern = '';
    if (this.obj?.pattern) {
      if (this.obj?.flags) {
        pattern = `/${this.obj?.pattern}/${this.obj.flags}`;
      } else {
        pattern = `/${this.obj?.pattern}/`;
      }
      returnVal += pattern;
    }
    return returnVal;
  }
}
