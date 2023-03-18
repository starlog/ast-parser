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
    if (getLevel() === 'all') {
      return `#S-${this.constructor.name}^${this.toString()}^${this.constructor.name}-E#\n`;
    }
    return `${this.toString()}`;
  }
}
