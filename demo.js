const LoggerManager = require('./logger/process')
LoggerManager.send({
    type: 'info',
    values: ['aa b\tc','hshahs', 'fs f']
})
LoggerManager.send({
    type: 'error',
    values: ['fasfa']
})

// 在不同模块下进行注册
const ModuleManager = require('./logger/module')
const modLogger = new ModuleManager('logger') //指定模块名
modLogger.send({
    type: 'warn',
    values: ['111', '33 dad']
})