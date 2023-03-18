//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class VariableDeclarator extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.declarations) {
      this.obj.declarations.forEach((x) => {
        const myObject = CreateDynamicASTClass(x);
        returnVal += myObject.get();
      });
    }
    if (this.obj?.id) {
      const myObject = CreateDynamicASTClass(this.obj.id);
      returnVal += `const ${myObject.get()}`;
    }
    if (this.obj?.init) {
      const myObject = CreateDynamicASTClass(this.obj.init);
      returnVal += ` = ${myObject.get()}`;
    }
    return returnVal;
  }
}
