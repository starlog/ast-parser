//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class TemplateLiteral extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.expressions) {
      this.obj.expressions.forEach((x) => {
        const myObject = CreateDynamicASTClass(x);
        returnVal += myObject.get();
      });
    }
    if (this.obj?.quasis) {
      this.obj.quasis.forEach((x) => {
        const myObject = CreateDynamicASTClass(x);
        returnVal += myObject.get();
      });
    }
    return returnVal;
  }
}
