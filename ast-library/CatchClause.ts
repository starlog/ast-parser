//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class CatchClause extends ast {
  toString() {
    let returnVal = '';
    let param = '';
    let body = '';
    if (this.obj?.param) {
      const myObject = CreateDynamicASTClass(this.obj.param);
      param += myObject.get();
      param = `catch (${param})`;
      returnVal += `${param}`;
    }
    if (this.obj?.body) {
      if (this.obj?.body?.body) {
        this.obj.body.body.forEach((x) => {
          const myObject = CreateDynamicASTClass(x);
          body += myObject.get();
        });
      }
      if (this.obj?.body?.directives) {
        this.obj.body.directives.forEach((x) => {
          const myObject = CreateDynamicASTClass(x);
          body += myObject.get();
        });
      }
      body = `{${body}}`;
      returnVal += `${body}`;
    }
    return returnVal;
  }
}
