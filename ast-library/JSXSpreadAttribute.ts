//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class JSXSpreadAttribute extends ast {
  toString() {
    const x = this.obj;
    return `(Bare:${this.constructor.name})`;
  }
}
