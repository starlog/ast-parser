//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class SequenceExpression extends ast {
  toString() {
    let returnVal = '';
    let expressionsString = '';
    if (this.obj?.expressions) {
      this.obj.expressions.forEach((x) => {
        const myObject = CreateDynamicASTClass(x);
        expressionsString += `${myObject.get()}, `;
      });
      expressionsString = expressionsString.slice(0, -2);
      returnVal = `${expressionsString}`;
    }
    return returnVal;
  }
}
