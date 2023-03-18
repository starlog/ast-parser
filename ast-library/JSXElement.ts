//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class JSXElement extends ast {
  toString() {
    let open = '';
    let close = '';
    if (this.obj?.openingElement) {
      const myObject = CreateDynamicASTClass(this.obj.openingElement);
      open = myObject.get();
    }
    if (this.obj?.closingElement) {
      const myObject = CreateDynamicASTClass(this.obj.closingElement);
      close = myObject.get();
    }
    return `${open}${close}`;
  }
}
