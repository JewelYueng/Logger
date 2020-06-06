const LoggerManager = require('./logger/processLogger')
LoggerManager.send({
    msg: '测试一下',
    type: 'info',
})