//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class TSTypeQuery extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.exprName) {
      returnVal += 'typeof ';
      const myQuery = CreateDynamicASTClass(this.obj?.exprName);
      returnVal += myQuery.get();
    }
    return returnVal;
  }
}
