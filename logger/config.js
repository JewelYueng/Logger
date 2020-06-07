/** 日志分级
 * 1. all
 * 2. trace
 * 3. debug
 * 4. info
 * 5. warn
 * 6. error
 * 7. fatal
 * 8. mark
 * 9. off
 */
const getPName = function () {
  let ret = process.title
  if (process.platform.substring(0, 3) === 'win') {
    let paths = ret.split('\\')
    ret = paths[paths.length - 1]
  }
  return ret
}
const Config = {
  appenders: {
    normal: {
      type: 'file',
      filename: `./log/${process.pid}/process.txt`
    },
    error: {
      type: 'file',
      filename: `./log/${process.pid}/error.txt`
    },
    warning: {
      type: 'file',
      filename: `./log/${process.pid}/warning.txt`
    },
    stderr: {
      type: 'file',
      filename: `./log/${process.pid}/stderr.txt`
    },
    stdout: {
      type: 'stdout',
      filename: `./log/${process.pid}/stdout.txt`
    },
  },
  categories: {
    default: {
      appenders: ['normal'],
      level: 'info'
    },
    info: {
      appenders: ['normal'],
      level: 'info'
    },
    error: {
      appenders: ['error'],
      level: 'error'
    },
    warning: {
      appenders: ['warning'],
      level: 'warn'
    },
    stderr: {
      appenders: ['stderr'],
      level: 'error'
    },
    stdout: {
      appenders: ['stdout'],
      level: 'info'
    }
  }
}
module.exports = Config