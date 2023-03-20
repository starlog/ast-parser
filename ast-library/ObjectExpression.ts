//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class ObjectExpression extends ast {
  toString() {
    let returnVal = '';
    let propertiesString = '';
    if (this.obj?.properties) {
      this.obj.properties.forEach((x) => {
        const myObject = CreateDynamicASTClass(x);
        propertiesString += `${myObject.get()}, `;
      });
      propertiesString = propertiesString.slice(0, -2);
      returnVal += `{${propertiesString}}`;
    }
    return returnVal;
  }
}
