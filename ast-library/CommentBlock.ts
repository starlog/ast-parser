//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';

export default class CommentBlock extends ast {
  toString() {
    return `\n  /*${this.obj?.value}*/`;
  }
}
