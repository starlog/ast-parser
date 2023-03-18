//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class TSIndexSignature extends ast {
  toString() {
    let returnVal = '';
    this.obj?.parameters.forEach((x) => {
      returnVal += `${x.name}:`;
      if (x?.typeAnnotation) {
        const myObject = CreateDynamicASTClass(x.typeAnnotation);
        returnVal += ` ${myObject.get()},`;
      }
    });
    returnVal = returnVal.slice(0, -1);
    returnVal = `[ ${returnVal} ]:`;
    if (this.obj?.typeAnnotation) {
      const myObj = CreateDynamicASTClass(this.obj?.typeAnnotation);
      returnVal += ` ${myObj.get()}`;
    }
    return returnVal;
  }
}
