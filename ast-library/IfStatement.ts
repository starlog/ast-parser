//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class IfStatement extends ast {
  toString() {
    let test = '';
    let consequent = '';
    if (this.obj?.test) {
      const myObject = CreateDynamicASTClass(this.obj.test);
      test += myObject.get();
    }
    if (this.obj?.consequent) {
      const myObject = CreateDynamicASTClass(this.obj.consequent);
      consequent += myObject.get();
    }
    return `if (${test}){${consequent}}`;
  }
}
