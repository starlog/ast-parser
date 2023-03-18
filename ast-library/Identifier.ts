//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class Identifier extends ast {
  toString() {
    let returnString = '';
    if (this.obj?.typeAnnotation) {
      returnString += `${this.obj?.name}: `;
      const myObject = CreateDynamicASTClass(this.obj?.typeAnnotation);
      returnString += myObject.get();
    } else {
      returnString += `${this.obj?.name}`;
    }
    return returnString;
  }
}
