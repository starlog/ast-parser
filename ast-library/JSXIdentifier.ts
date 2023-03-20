//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';

export default class JSXIdentifier extends ast {
  toString() {
    if (this.obj?.name) {
      return this.obj?.name;
    }
    return '';
  }
}
