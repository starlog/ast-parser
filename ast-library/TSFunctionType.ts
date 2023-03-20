//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class TSFunctionType extends ast {
  toString() {
    let returnString = '';
    if (this.obj?.parameters){
      this.obj?.parameters.forEach((x) => {
        const myObject = CreateDynamicASTClass(x);
        returnString += myObject.get();
      });
      returnString = `(${returnString}) => `;
      const myObject = CreateDynamicASTClass(this.obj?.typeAnnotation);
      returnString += myObject.get();
    }
    return returnString;
  }
}
