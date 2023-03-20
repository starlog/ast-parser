//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class ThrowStatement extends ast {
  toString() {
    let returnVal = '';
    let argumentString = '';
    if (this.obj?.argument) {
      const myObject = CreateDynamicASTClass(this.obj.argument);
      argumentString += myObject.get();

      returnVal += `throw ${argumentString}`;
    }
    return returnVal;
  }
}
