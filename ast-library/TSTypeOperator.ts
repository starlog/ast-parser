//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class TSTypeOperator extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.operator || this.obj?.typeAnnotation) {
      returnVal += `${this.obj?.operator} `;
      if (this.obj?.typeAnnotation) {
        const myObject = CreateDynamicASTClass(this.obj.typeAnnotation);
        returnVal += myObject.get();
      }
    }
    return returnVal;
  }
}
