//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class BlockStatement extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.body) {
      this.obj.body.forEach((x) => {
        const myObject = CreateDynamicASTClass(x);
        returnVal += `\n  ${myObject.get()}`;
      });
    }
    return returnVal;
  }
}
