//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class TSTypeParameterInstantiation extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.params) {
      this.obj.params.forEach((x) => {
        const myObject = CreateDynamicASTClass(x);
        returnVal += myObject.get();
      });
      returnVal = `<${returnVal}>`;
    }
    return returnVal;
  }
}
