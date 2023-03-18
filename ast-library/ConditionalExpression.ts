//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class ConditionalExpression extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.test) {
      const myObject = CreateDynamicASTClass(this.obj.test);
      returnVal += `${myObject.get()} ? `;
    }
    if (this.obj?.consequent) {
      const myObject = CreateDynamicASTClass(this.obj.consequent);
      returnVal += `${myObject.get()} : `;
    }
    if (this.obj?.alternate) {
      const myObject = CreateDynamicASTClass(this.obj.alternate);
      returnVal += `${myObject.get()}`;
    }
    return `${returnVal}`;
  }
}
