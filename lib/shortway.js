'use strict'

const includes = require('array-includes')
const keyCodes = require('./keycodes')

function shortway(command, callback) {
  const keys = command.split('+')
  const key = keys.filter(cmd => includes(Object.keys(keyCodes), cmd))
  const keyCode = keyCodes[key[0]]
  const ctrl = keys.some(key => key === 'ctrl')
  const shift = keys.some(key => key === 'shift')
  const alt = keys.some(key => key === 'alt')

  return function (e) {
    if (e.ctrlKey === ctrl &&
      e.shiftKey === shift &&
      e.altKey === alt &&
      e.keyCode === keyCode) {
      callback(e)
      return false
    }
  }
}

exports.default = shortway
module.exports = exports.default
