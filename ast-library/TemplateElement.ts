//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';

export default class TemplateElement extends ast {
  toString() {
    // TODO: check what to do with tail
    return `\`${this.obj?.value.raw}\``;
  }
}
