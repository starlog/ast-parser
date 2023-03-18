//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class AssignmentPattern extends ast {
  toString() {
    let left = '';
    let right = '';
    if (this.obj?.left) {
      const myObject = CreateDynamicASTClass(this.obj.left);
      left += myObject.get();
    }
    if (this.obj?.right) {
      const myObject = CreateDynamicASTClass(this.obj.right);
      right += myObject.get();
    }
    return `${left} = '${right}'`;
  }
}
