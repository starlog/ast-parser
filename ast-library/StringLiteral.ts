//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';

export default class StringLiteral extends ast {
  toString() {
    return this.obj?.value;
  }
}
