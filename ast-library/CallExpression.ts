//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class CallExpression extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.callee || this.obj?.arguments) {
      let data1 = '';
      let data2 = '';
      if (this.obj?.callee) {
        const myObject = CreateDynamicASTClass(this.obj.callee);
        data1 = myObject.get();
      }
      if (this.obj?.arguments) {
        this.obj.arguments.forEach((x) => {
          const myObject = CreateDynamicASTClass(x);
          data2 += `${myObject.get()},`;
        });
        data2 = data2.slice(0, -1);
      }

      returnVal += `${data1}(${data2})`;
    }
    return returnVal;
  }
}
