const log4js = require("log4js");


class Logger {
  constructor(config) {
    this.init(config)
  }
  init(config) {
    log4js.configure(config)
    Object.keys(config.categories).forEach(c => {
      this[`${c}Logger`] = log4js.getLogger()
    })
  }
  send({ msg, type }) {
    this[`${type}Logger`][type](msg)
  }
  
} 

module.exports = Logger