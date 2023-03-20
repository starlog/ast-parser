//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class ReturnStatement extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.argument) {
      const myObject = CreateDynamicASTClass(this.obj.argument);
      returnVal += myObject.get();
      returnVal = `return (${returnVal});`;
    }
    return returnVal;
  }
}
