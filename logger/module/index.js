const Logger = require('../index')

class ModuleLogger extends Logger {
  constructor(name = 'default') {
    super({
      appenders: {
        module: {
          type: 'file',
          filename: `./log/${name}.txt`,
          maxLogSize: 20971520
        }
      },
      categories: {
        default: {
          appenders: [ 'module' ], level: 'all'
        }
      }
    })
  }
  
}
module.exports = ModuleLogger