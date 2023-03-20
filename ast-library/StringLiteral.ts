//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';

export default class StringLiteral extends ast {
  toString() {
    if (this.obj?.value) {
      return this.obj?.value;
    }
    return '';
  }
}
