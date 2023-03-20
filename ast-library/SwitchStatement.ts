//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class SwitchStatement extends ast {
  toString() {
    let returnVal = '';
    let discriminantString = '';
    let casesString = '';
    if(this.obj?.discriminant){
      const myObject = CreateDynamicASTClass(this.obj?.discriminant);
      discriminantString += `${myObject.get()}`;
      returnVal += `switch (${discriminantString}) {`;
    }
    if(this.obj?.cases){
      this.obj.cases.forEach((x) => {
        const myObject = CreateDynamicASTClass(x);
        casesString += `${myObject.get()}`;
      });
    }
    returnVal += `${casesString} }`;
    return returnVal;
  }

}
