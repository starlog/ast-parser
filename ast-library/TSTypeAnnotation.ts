//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class TSTypeAnnotation extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.typeAnnotation) {
      const myObject = CreateDynamicASTClass(this.obj?.typeAnnotation);
      returnVal += myObject.get();
    }
    return returnVal;
  }
}
