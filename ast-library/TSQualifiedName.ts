//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';

export default class TSQualifiedName extends ast {
  toString() {
    return `${this.obj?.left.name}.${this.obj?.right.name}`;
  }
}
