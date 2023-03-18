//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class ObjectProperty extends ast {
  toString() {
    // TODO need check method, shorthand, value, extra
    let returnVal = '';
    if (this.obj?.key) {
      returnVal += `${this.obj.key.name}: `;
    }
    if (this.obj?.value) {
      const myObject = CreateDynamicASTClass(this.obj.value);
      returnVal += myObject.get();
    }
    return `${returnVal}`;
  }
}
