//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class ObjectExpression extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.properties) {
      this.obj.properties.forEach((x) => {
        const myObject = CreateDynamicASTClass(x);
        returnVal += `${myObject.get()}, `;
      });
    }
    returnVal = returnVal.slice(0, -2);
    return `{${returnVal}}`;
  }
}
