//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';

export default class CommentLine extends ast {
  toString() {
    return this.obj?.value;
  }
}
