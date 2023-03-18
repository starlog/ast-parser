//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class MemberExpression extends ast {
  toString() {
    let item1;
    let item2;
    if (this.obj?.object) {
      const myObject = CreateDynamicASTClass(this.obj.object);
      item1 = myObject.get();
    }
    if (this.obj?.property) {
      const myObject = CreateDynamicASTClass(this.obj.property);
      item2 = myObject.get();
    }
    return `${item1}.${item2}`;
  }
}
