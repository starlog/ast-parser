//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';

export default class ImportDefaultSpecifier extends ast {
  toString() {
    return this.obj?.local.name;
  }
}
