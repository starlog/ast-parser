//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';

export default class CommentLine extends ast {
  toString() {
    if (this.obj?.value) {
      return this.obj?.value;
    }
    return '';
  }
}
