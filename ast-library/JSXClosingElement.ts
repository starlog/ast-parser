//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class JSXClosingElement extends ast {
  toString() {
    let name = '';
    if (this.obj?.name) {
      const myObject = CreateDynamicASTClass(this.obj.name);
      name += `</${myObject.get()}>`;
    }
    return name;
  }
}
