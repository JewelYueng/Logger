const Logger = require('./index')
const logConfig = require('./config')
// 获取进程信息
const getPID = function () {
  return process.pid
}
const getPName = function () {
  let ret = process.title
  if(process.platform.substring(0,3) === 'win'){
    let paths = ret.split('\\')
    ret = paths[paths.length - 1]
  }
  return ret
}
class ProcessLogger extends Logger {
  constructor() {
    super(logConfig)
  }
  
}
const ProLogger = new ProcessLogger()
module.exports = ProLogger