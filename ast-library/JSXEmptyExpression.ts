//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class JSXEmptyExpression extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.innerComments) {
      let innerComments = '';
      this.obj?.innerComments.forEach((x) => {
        const myObject = CreateDynamicASTClass(x);
        innerComments += myObject.get();
      });
      returnVal += `{${innerComments}}`;
    }
    return returnVal;
  }
}
