//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class SwitchCase extends ast {
  toString() {
    let returnVal = '';
    let testString = '';
    let consequentString = '';
    if (this.obj?.test) {
      const myObject = CreateDynamicASTClass(this.obj.test);
      testString += myObject.get();
      returnVal += `case '${testString}':`;
    }
    if (this.obj?.consequent) {
      this.obj.consequent.forEach((x) => {
        const myObject = CreateDynamicASTClass(x);
        consequentString += `${myObject.get()}`;
        returnVal += `${consequentString}`;
      });
    }
    return returnVal;
  }
}
