//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class LogicalExpression extends ast {
  toString() {
    let left = '';
    let operator = '';
    let right = '';
    if (this.obj?.left) {
      const myObj = CreateDynamicASTClass(this.obj.left);
      left = myObj.get();
    }
    if (this.obj?.operator) {
      operator = this.obj.operator;
    }
    if (this.obj?.right) {
      const myObj = CreateDynamicASTClass(this.obj.right);
      right = myObj.get();
    }
    return `${left} ${operator} ${right}`;
  }
}
