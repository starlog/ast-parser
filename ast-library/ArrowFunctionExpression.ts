//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class ArrowFunctionExpression extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.params || this.obj?.body || this.obj?.body?.type) {
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
      // TODO matched with UI003, need check with other sample
      if (this.obj?.body?.type === 'BlockStatement') {
        returnVal += `(${data1}) => {${data2}\n}`;
      } else {
        returnVal += `{${data1} => ${data2}}`;
      }
    }
    return returnVal;
  }
}
