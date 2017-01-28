import test from 'tape'
import shortway from '../lib/shortway'

test('curried function', t => {
  t.equal(typeof shortway('ctrl'), 'function', 'should return a function')
  t.end()
})

test('ctrl+9', t => {
  let expected = ''
  const shortcut = shortway('ctrl+9', () => {
    expected = 'expected'
  })
  shortcut({ctrlKey: true, altKey: false, shiftKey: false, keyCode: 57})
  t.equal(expected, 'expected')
  t.end()
})

test('ctrl+9', t => {
  let expected = ''
  const shortcut = shortway('ctrl+9', () => {
    expected = 'expected'
  })
  shortcut({ctrlKey: true, altKey: false, shiftKey: false, keyCode: 53})
  t.notEqual(
    expected,
    'expected',
    'should do nothing because the command did not match')
  t.end()
})
