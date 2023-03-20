//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';

export default class NumericLiteral extends ast {
  toString() {
    if (this.obj?.value){
      return this.obj?.value;
    }
    return '';
  }
}
