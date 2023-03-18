//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class ExpressionStatement extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.expression) {
      const myObject = CreateDynamicASTClass(this.obj.expression);
      returnVal += myObject.get();
    }
    return `${returnVal};`;
  }
}
