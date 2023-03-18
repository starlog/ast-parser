//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class VariableDeclarator extends ast {
  toString() {
    let val1 = '';
    let val2 = '';
    let val3 = '';
    if (this.obj?.declarations) {
      this.obj.declarations.forEach((x) => {
        const myObject = CreateDynamicASTClass(x);
        val1 += myObject.get();
      });
    }
    if (this.obj?.id) {
      const myObject = CreateDynamicASTClass(this.obj.id);
      val2 += `const ${myObject.get()}`;
    }
    if (this.obj?.init) {
      const myObject = CreateDynamicASTClass(this.obj.init);
      val3 += ` = ${myObject.get()}`;
    }
    return `${val1}${val2}${val3}`;
  }
}
