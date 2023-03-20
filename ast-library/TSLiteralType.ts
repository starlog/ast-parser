//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class TSLiteralType extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.literal) {
      const myObject = CreateDynamicASTClass(this.obj?.literal);
      const myResultValue = myObject.get();

      if (typeof myResultValue === 'string') {
        returnVal += `'${myObject.get()}'`;
      } else {
        returnVal += `${myObject.get()}`;
      }
    }
    return returnVal;
  }
}
