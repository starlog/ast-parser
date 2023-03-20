//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class placeholder extends ast {
  toString() {
    let returnVal = '';
    const x = this.obj;
    returnVal += `(Bare:${this.constructor.name})`;
    return returnVal;
  }
}
