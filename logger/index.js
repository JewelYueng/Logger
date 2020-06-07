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
  send({
    values,
    type
  }) {
    this[`${type}Logger`][type](this.render(values))
  }
  render(val) {
    let middle = val.some(v => /\s/.test(v)) ? '\t' : ' '
    return val.join(middle)
  }
}

module.exports = Logger