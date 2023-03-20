//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class TSAsExpression extends ast {
  toString() {
    let returnVal = '';
    let propertiesString = '';
    let typeAnnotationString = '';
    if (this.obj?.expression) {
      if (this.obj?.expression.properties) {
        this.obj.expression.properties.forEach((x) => {
          const myObject = CreateDynamicASTClass(x);
          propertiesString += `${myObject.get()},`;
        });
        returnVal += `${propertiesString}`;
      }
    }
    if (this.obj?.typeAnnotation) {
      const myObject = CreateDynamicASTClass(this.obj.typeAnnotation);
      typeAnnotationString += myObject.get();
      returnVal += ` as ${typeAnnotationString}`;
    }

    return returnVal;
  }
}
