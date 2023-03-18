//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';

export default class JSXText extends ast {
  toString() {
    return this.obj?.value;
  }
}
