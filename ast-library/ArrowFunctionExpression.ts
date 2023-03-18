//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class ArrowFunctionExpression extends ast {
  toString() {
    let data1 = '';
    let data2 = '';
    if (this.obj?.params) {
      this.obj.params.forEach((x) => {
        const myObject = CreateDynamicASTClass(x);
        data1 += myObject.get();
      });
    }
    if (this.obj?.body) {
      const myObject = CreateDynamicASTClass(this.obj.body);
      data2 += myObject.get();
    }
    return `(${data1}) => {${data2}}`;
  }
}
