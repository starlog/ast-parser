//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';

export default class CommentBlock extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.value) {
      returnVal += `\n  /*${this.obj?.value}*/`;
    }
    return returnVal;
  }
}
