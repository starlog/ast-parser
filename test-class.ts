// classes 구현 상태 확인 script
import { classes, CreateDynamicASTClass } from './ast-library/CreateDynamicASTClass';

console.log('Following classes has NOT implemented');
console.log('-------------------------------------------------------------------------------------');
classes.forEach((classElement) => {
  try {
    const classNameString = classElement.toString();
    const classTypeSpecifier = classNameString.split(' ')[1];
    const myObj = { type: classTypeSpecifier };
    const myObject = CreateDynamicASTClass(myObj);

    const resultString = myObject.get();
    if (resultString.includes('(Bare:')) {
      console.log(`${classTypeSpecifier}:${resultString}`);
    } else {
      // console.log(`${classTypeSpecifier}:${resultString}`);
    }
  } catch (ex) {
    // intentional
    console.error(`ERR:${ex}`);
  }
});
