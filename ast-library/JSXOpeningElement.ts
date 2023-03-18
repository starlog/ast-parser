//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class JSXOpeningElement extends ast {
  toString() {
    let returnVal;
    let name = '';
    let identifier = '';
    let attributes = '';
    if (this.obj?.name) {
      const myObject = CreateDynamicASTClass(this.obj.name);
      name += myObject.get();
    }
    if (this.obj?.identifier) {
      const myObject = CreateDynamicASTClass(this.obj.identifier);
      identifier += ` ${myObject.get()}`;
    }
    if (this.obj?.attributes) {
      this.obj.attributes.forEach((x) => {
        const myObject = CreateDynamicASTClass(x);
        attributes += ` ${myObject.get()}`;
      });
    }
    if (this.obj?.selfClosing) {
      returnVal = `<${name}${identifier}${attributes}/>`;
    } else {
      returnVal = `<${name}${identifier}${attributes}>`;
    }
    return returnVal;
  }
}
