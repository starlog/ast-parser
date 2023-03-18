//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class TSLiteralType extends ast {
  toString() {
    const myObject = CreateDynamicASTClass(this.obj?.literal);
    const myResultValue = myObject.get();

    if (typeof myResultValue === 'string') {
      return `'${myObject.get()}'`;
    }
    return `${myObject.get()}`;
  }
}
