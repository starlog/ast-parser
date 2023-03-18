//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class TSTypeReference extends ast {
  toString() {
    const isTypeNameExists = !!this.obj?.typeName;
    const isTypeParametersExists = !!this.obj?.typeParameters;
    let returnVal = '';
    let returnVal2 = '';
    if (isTypeNameExists) {
      const myObject = CreateDynamicASTClass(this.obj?.typeName);
      returnVal += myObject.get();
    }
    if (isTypeParametersExists) {
      this.obj?.typeParameters.params.forEach((x) => {
        const myObject2 = CreateDynamicASTClass(x);
        returnVal2 += `${myObject2.get()},`;
      });
      returnVal2 = returnVal2.slice(0, -1);
      returnVal2 = `<${returnVal2}>`;
    }
    return returnVal + returnVal2;
  }
}
