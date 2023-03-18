//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';

export default class TemplateElement extends ast {
  toString() {
    if (this.obj?.tail) {
      return `${this.obj?.value.raw}\``;
    }
    return `\`${this.obj?.value.raw}`;
  }
}
