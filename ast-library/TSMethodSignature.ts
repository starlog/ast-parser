//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class TSMethodSignature extends ast {
  toString() {
    let returnVal = '';
    returnVal += `${this.obj?.key?.name}():`;
    if (this.obj?.typeAnnotation) {
      const myObject = CreateDynamicASTClass(this.obj?.typeAnnotation);
      returnVal += ` ${myObject.get()}`;
    }
    return returnVal;
  }
}
