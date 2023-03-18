//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';

export default class JSXIdentifier extends ast {
  toString() {
    return this.obj?.name;
  }
}
