//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';

export default class TemplateElement extends ast {
  toString() {
    let returnVal = '';
    if (this.obj?.value?.raw) {
      if (this.obj?.tail) {
        returnVal += `${this.obj?.value.raw}\``;
      } else {
        returnVal += `\`${this.obj?.value.raw}`;
      }
    }
    return returnVal;
  }
}
