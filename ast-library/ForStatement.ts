//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class ForStatement extends ast {
  toString() {
    let returnVal = '';
    let initString = '';
    let testString = '';
    let updateString = '';
    let bodyString = '';
    if (this.obj?.init) {
      if (this.obj?.init?.declarations) {
        this.obj.init.declarations.forEach((x) => {
          const myObject = CreateDynamicASTClass(x);
          initString += `${myObject.get()}, `;
        });
        initString = initString.slice(0, -2);
      }
    }
    if (this.obj?.test) {
      if (this.obj?.test.left && this.obj?.test.operator && this.obj?.test.right) {
        const myObjectLeft = CreateDynamicASTClass(this.obj?.test.left);
        const myObjectRight = CreateDynamicASTClass(this.obj?.test.right);
        testString += `${myObjectLeft.get()} ${this.obj?.test.operator} ${myObjectRight.get()}`;
      }
    }
    if (this.obj?.update) {
      if (this.obj?.update.operator && this.obj?.update.argument && this.obj?.update.prefix) {
        const myObject = CreateDynamicASTClass(this.obj.update.argument);
        if (this.obj.update.prefix) {
          updateString += `${this.obj.update.operator} ${myObject.get()}`;
        } else {
          updateString += `${myObject.get()} ${this.obj.update.operator}`;
        }
      }
    }
    if (this.obj?.body) {
      if (this.obj.body?.body) {
        this.obj.body.body.forEach((x) => {
          const myObject = CreateDynamicASTClass(x);
          bodyString += `${myObject.get()}`;
        });
      }
    }

    returnVal = `for (${initString}; ${testString}); ${updateString}) {${bodyString}}`;
    return returnVal;
  }
}
