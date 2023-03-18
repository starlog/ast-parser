//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class TemplateLiteral extends ast {
  toString() {
    let val1 = '';
    let val2 = '';
    if (this.obj?.expressions) {
      this.obj.expressions.forEach((x) => {
        const myObject = CreateDynamicASTClass(x);
        val1 += myObject.get();
      });
    }
    if (this.obj?.quasis) {
      this.obj.quasis.forEach((x, index) => {
        const myObject = CreateDynamicASTClass(x);
        val2 += myObject.get();
        if (index === 0 && this.obj?.expressions) {
          this.obj.expressions.forEach((y) => {
            const myObject2 = CreateDynamicASTClass(y);
            val2 += myObject2.get();
          });
        }
      });
    }
    return `\`${val1}${val2}`;
  }
}
