//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import { getLogger, getLevel } from './logger';

const logger = getLogger();

//-------------------------------------------------------------------------------------------------
// Base class
//-------------------------------------------------------------------------------------------------
export default class ast {
    public obj: any;
  constructor(obj) {
    if (obj?.type !== this.constructor.name) {
      const message = `Type mismatch. mine:${this.constructor.name}, caller:${JSON.stringify(obj)}`;
      logger.error(message);
      throw new Error(message);
    } else {
      this.obj = structuredClone(obj);
    }
  }

  toString() {
    return `(Bare:${this.constructor.name})`;
  }

  get() {
    // if (getLevel() === 'all') {
    //   return `\x1b[33m(S-${this.constructor.name})\x1b[0m\x1b[37m${this.toString()}\x1b[0m\x1b[33m(${this.constructor.name}-E)\x1b[0m\n`;
    // }
    // return `${this.toString()}`;
    return this.toString();
  }
}
