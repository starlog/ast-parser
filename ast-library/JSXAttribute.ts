//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class JSXAttribute extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.name || this.obj?.value) {
      let name = '';
      let value = '';
      if (this.obj?.name) {
        const myObject = CreateDynamicASTClass(this.obj.name);
        name += myObject.get();
      }
      if (this.obj?.value) {
        const myObject = CreateDynamicASTClass(this.obj.value);
        value += myObject.get();
      }
      returnVal += `${name}={${value}}`;
    }
    return returnVal;
  }
}
