'use strict'

import keyCodes from './keycodes'

const includes = (array, item) => array.indexOf(item) > -1

function shortway(command, callback) {
  const keys = command.split('+')
  const key = keys.filter(cmd => includes(Object.keys(keyCodes), cmd))
  const keyCode = keyCodes[key[0]]
  const ctrl = keys.some(key => key === 'ctrl')
  const meta = keys.some(key => key === 'meta')
  const shift = keys.some(key => key === 'shift')
  const alt = keys.some(key => key === 'alt')

  return function (e) {
    if (e.ctrlKey === ctrl &&
      e.metaKey === meta &&
      e.shiftKey === shift &&
      e.altKey === alt &&
      e.keyCode === keyCode) {
      callback(e)
      return false
    }
  }
}

export default shortway
