//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class OptionalCallExpression extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.callee) {
      const myObject = CreateDynamicASTClass(this.obj.callee);
      returnVal += myObject.get();
    }
    return `${returnVal}`;
  }
}
