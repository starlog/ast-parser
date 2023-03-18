//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';

export default class ImportSpecifier extends ast {
  toString() {
    return this.obj?.local.name;
  }
}
