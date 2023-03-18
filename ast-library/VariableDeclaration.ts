//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class VariableDeclaration extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.declarations) {
      this.obj.declarations.forEach((x) => {
        const myObject = CreateDynamicASTClass(x);
        returnVal += myObject.get();
      });
    }
    return `${returnVal};`;
  }
}
