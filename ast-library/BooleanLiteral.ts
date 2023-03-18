//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';

export default class BooleanLiteral extends ast {
  toString() {
    return `${this.obj.value}`;
  }
}
