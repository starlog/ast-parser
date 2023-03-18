//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class CallExpression extends ast {
  toString() {
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

    return `${data1}(${data2})`;
  }
}
