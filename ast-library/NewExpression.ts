//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class NewExpression extends ast {
  toString() {
    let returnVal = '';
    let callee = '';
    let argumentsString = '';
    if (this.obj?.callee) {
      const myObject = CreateDynamicASTClass(this.obj.callee);
      callee += myObject.get();
    }
    if (this.obj?.arguments) {
      this.obj.arguments.forEach((x) => {
        const myObject = CreateDynamicASTClass(x);
        argumentsString += myObject.get();
      });
    }
    returnVal += `new ${callee}(${argumentsString})`;
    return returnVal;
  }
}
