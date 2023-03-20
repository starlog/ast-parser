//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class SpreadElement extends ast {
  toString() {
    let argument = '';
    if (this.obj?.argument) {
      const myObject = CreateDynamicASTClass(this.obj.argument);
      argument += myObject.get();
      argument = `...${argument}`;
    }
    return argument;
  }
}
