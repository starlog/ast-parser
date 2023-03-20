//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';

export default class ImportDefaultSpecifier extends ast {
  toString() {
    if (this.obj?.local?.name) {
      return this.obj?.local.name;
    }
    return '';
  }
}
