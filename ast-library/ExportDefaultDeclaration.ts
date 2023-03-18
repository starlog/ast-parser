//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class ExportDefaultDeclaration extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.declaration) {
      const myObject = CreateDynamicASTClass(this.obj.declaration);
      returnVal += myObject.get();
    }
    return `export default ${returnVal};`;
  }
}
