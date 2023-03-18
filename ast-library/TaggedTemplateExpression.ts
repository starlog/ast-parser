//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class TaggedTemplateExpression extends ast {
  toString() {
    let val1 = '';
    let val2 = '';
    let val3 = '';
    if (this.obj?.tag) {
      const myObject = CreateDynamicASTClass(this.obj.tag);
      val1 += myObject.get();
    }
    if (this.obj?.typeParameters) {
      const myObject = CreateDynamicASTClass(this.obj?.typeParameters);
      val2 += myObject.get();
    }
    if (this.obj?.quasi) {
      const myObject = CreateDynamicASTClass(this.obj.quasi);
      val3 += myObject.get();
    }
    return `${val1}${val2}${val3}`;
  }
}
