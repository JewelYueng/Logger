const LoggerManager = require('./logger/processLogger')
LoggerManager.send({
    type: 'info',
    values: ['hshahs', 'fs f']
})