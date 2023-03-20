//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class JSXExpressionContainer extends ast {
  toString() {
    let expression = '';
    if (this.obj?.expression) {
      const myObject = CreateDynamicASTClass(this.obj.expression);
      expression += myObject.get();
    }
    return `${expression}`;
  }
}
