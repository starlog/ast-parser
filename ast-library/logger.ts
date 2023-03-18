//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import log4js from 'log4js';

log4js.configure({
    appenders: {
        out: { type: 'stdout', layout: { type: 'messagePassThrough' } },
        basic: { type: 'stdout', layout: { type: 'basic' } },
    },
    categories: {
        default: { appenders: ['out'], level: 'debug' },
    },
});

const logger = log4js.getLogger('default');
let loggerLevel='debug';

export function getLogger():any{
    return logger;
}

export function setLevel(level:string):boolean{
    loggerLevel = level;
    logger.level = level;
    return true;
}

export function getLevel():string{
    return  loggerLevel;
}