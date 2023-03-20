//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class TSArrayType extends ast {
  toString() {
    let returnVal = '';

    if (this.obj?.elementType) {
      const myObject = CreateDynamicASTClass(this.obj.elementType);
      returnVal += `${myObject.get()}[]`;
    }
    return returnVal;
  }
}
