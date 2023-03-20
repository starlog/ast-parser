//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class JSXSpreadAttribute extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.argument) {
      let argument = '';
      const myObject = CreateDynamicASTClass(this.obj.argument);
      argument += myObject.get();
      returnVal += `{...${argument}}`;
    }
    return returnVal;
  }
}
