//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class UnaryExpression extends ast {
  toString() {
    let operator = '';
    let argument = '';
    if (this.obj?.operator) {
      operator += this.obj.operator;
    }
    if (this.obj?.argument) {
      const myObject = CreateDynamicASTClass(this.obj.argument);
      argument += myObject.get();
    }
    return `${operator} ${argument}`;
  }
}
