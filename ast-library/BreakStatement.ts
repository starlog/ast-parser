//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';

export default class BreakStatement extends ast {
  // eslint-disable-next-line class-methods-use-this
  toString() {
    return 'break;';
  }
}
