//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class TryStatement extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.block || this.obj?.handler) {
      let block = '';
      let handler = '';

      if (this.obj?.block) {
        const myObject = CreateDynamicASTClass(this.obj.block);
        block += myObject.get();
      }
      if (this.obj?.handler) {
        const myObject = CreateDynamicASTClass(this.obj.handler);
        handler += myObject.get();
      }

      returnVal = `try { ${block} } ${handler}`;
    }
    return returnVal;
  }
}
