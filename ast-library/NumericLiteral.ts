//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';

export default class NumericLiteral extends ast {
  toString() {
    return this.obj?.value;
  }
}
