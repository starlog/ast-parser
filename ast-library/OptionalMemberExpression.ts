//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class OptionalMemberExpression extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.object) {
      const myObject = CreateDynamicASTClass(this.obj.object);
      if (this.obj?.optional) {
        returnVal += `${myObject.get()}?`;
      } else {
        returnVal += `${myObject.get()}`;
      }
    }

    if (this.obj?.property) {
      const myObject = CreateDynamicASTClass(this.obj.property);
      returnVal += `.${myObject.get()}()`;
    }
    return `${returnVal}`;
  }
}
