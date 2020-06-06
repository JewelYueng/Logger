const Logger = require('./index')
const logConfig = require('./config')
// 获取进程信息
const getPID = function () {
  return process.pid
}
const getPName = function () {
  return process.title
}
class ProcessLogger extends Logger {
  constructor() {
    super(logConfig)
  }
}
const ProLogger = new ProcessLogger()
module.exports = ProLogger