//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';

export default class TSNumberKeyword extends ast {
  // eslint-disable-next-line class-methods-use-this
  toString() {
    return 'number';
  }
}
