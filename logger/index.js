const log4js = require("log4js");
const layout = {
  type: 'pattern',
  pattern: '%d{yyyy-MM-dd hh:mm:ss} %h-%z %s %m%n'
}

class Logger {
  constructor(config) {
    Object.keys(config.appenders).forEach(a => {
      config.appenders[a].layout = layout
    })
    log4js.configure(config)
    this.logger = log4js
  }
  send({
    values,
    type
  }) {
    this.logger.getLogger()[type](this.render(values))
  }
  render(val) {
    let middle = val.some(v => /\s/.test(v)) ? '\t' : ' '
    let former = []
    let latter = []
    val.forEach(v => {
      /\s/.test(v) && /\t/.test(v) ?
        latter.push(v):
        former.push(v)
    })
    return [...former, ...latter].join(middle)
  }
}

module.exports = Logger