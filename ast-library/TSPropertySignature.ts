//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class TSPropertySignature extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.key?.name) {
      returnVal += `${this.obj?.key.name}${this.obj?.optional ? '?' : ''}: `;
    }
    if (this.obj?.typeAnnotation?.typeAnnotation) {
      // logger.debug(`[${this.obj?.typeAnnotation?.typeAnnotation.type}] ${JSON.stringify(this.obj?.typeAnnotation?.typeAnnotation)}`);
      // logger.debug(`[${this.obj?.typeAnnotation?.typeAnnotation.type}]`);
      const myObject = CreateDynamicASTClass(this.obj?.typeAnnotation?.typeAnnotation);
      returnVal += myObject.get();
    }
    return returnVal;
  }
}
