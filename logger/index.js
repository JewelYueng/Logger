const log4js = require("log4js");
const logConfig = require('./config')
// 获取进程信息
const getPID = function() {
  return process.pid
}
const getPName = function() {
  return process.title
}
class Logger {
  constructor() {
    this.init()
  }
  init(config = logConfig) {
    log4js.configure(config)
    Object.keys(config.categories).forEach(c => {
      this[`${c}Logger`] = log4js.getLogger()
    })
  }
  send({ msg, type }) {
    this[`${type}Logger`][type](msg)
  }

}
const LoggrManager = new Logger()
module.exports = LoggrManager