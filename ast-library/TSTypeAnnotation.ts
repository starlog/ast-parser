//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class TSTypeAnnotation extends ast {
  toString() {
    const myObject = CreateDynamicASTClass(this.obj?.typeAnnotation);
    return myObject.get();
  }
}
