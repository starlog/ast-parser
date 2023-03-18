//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class TaggedTemplateExpression extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.tag) {
      const myObject = CreateDynamicASTClass(this.obj.tag);
      returnVal += myObject.get();
    }
    if (this.obj?.quasi) {
      const myObject = CreateDynamicASTClass(this.obj.quasi);
      returnVal += myObject.get();
    }
    return returnVal;
  }
}
