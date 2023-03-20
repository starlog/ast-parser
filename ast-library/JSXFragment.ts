//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import ast from './ast';
import { CreateDynamicASTClass } from './CreateDynamicASTClass';

export default class JSXFragment extends ast {
  toString() {
    let returnVal = '';
    let openingFragment = '';
    let closingFragment = '';
    let children = '';
    if (this.obj?.openingFragment) {
      const myObject = CreateDynamicASTClass(this.obj.openingFragment);
      openingFragment += myObject.get();
      returnVal += `${openingFragment}`;
    }
    if (this.obj?.children) {
      this.obj.children.forEach((x) => {
        const myObject = CreateDynamicASTClass(x);
        children += myObject.get();
      });
      returnVal += `${children}`;
    }
    if (this.obj?.closingFragment) {
      const myObject = CreateDynamicASTClass(this.obj.closingFragment);
      closingFragment += myObject.get();
      returnVal += `${closingFragment}`;
    }

    return returnVal;
  }
}
