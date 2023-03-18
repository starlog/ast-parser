//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class ImportNamespaceSpecifier extends ast {
  toString() {
    let returnVal = '';
    const myObject = CreateDynamicASTClass(this.obj?.local);
    returnVal += `* as ${myObject.get()}`;
    return returnVal;
  }
}
