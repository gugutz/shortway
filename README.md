# Shortway

[![Greenkeeper badge](https://badges.greenkeeper.io/thiamsantos/shortway.svg)](https://greenkeeper.io/)
[![Travis](https://img.shields.io/travis/thiamsantos/shortway.svg)](https://travis-ci.org/thiamsantos/shortway)
[![Coveralls](https://img.shields.io/coveralls/thiamsantos/shortway.svg)](https://coveralls.io/github/thiamsantos/shortway?branch=master)
[![npm (scoped)](https://img.shields.io/npm/v/shortway.svg)](https://www.npmjs.com/package/shortway)
[![David](https://img.shields.io/david/thiamsantos/shortway.svg)](https://david-dm.org/thiamsantos/shortway)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

Tiny to library to handle keyboard shortcuts in the browser. Feel free to use it with any kind of keyboard events and attach them to any element that you want.

[Try shortway live on codepen!](http://codepen.io/thiamsantos/full/YNEadb/)

## Install
This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

```sh
$ npm install --dev shortway
```

Then with a module bundler like [rollup](http://rollupjs.org/) or [webpack](https://webpack.js.org/), use as you would anything else:

```javascript
// using ES6 modules
import shortway from 'shortway'

// using CommonJS modules
var shortway = require('shortway')
```

The [UMD](https://github.com/umdjs/umd) build is also available on [unpkg](https://unpkg.com):

```html
<script src="https://unpkg.com/shortway/lib/shortway.umd.js"></script>
```
You can find the library on `window.shortway`.

## Usage
```javascript
import shortway from 'shortway'

const callback = (e) => {console.log(e)}

const spaceShortcut = shortway('ctrl+space', callback)
document.addEventListener('keyup', spaceShortcut)

const customShortcut = shortway('ctrl+shift+left', callback)
document.querySelector('input').addEventListener('keypress', customShortcut)
```

## Supported Keys
Shortway current supports ctrl, alt and shift along with the following shortcuts:

- backspace
- space
- 0-9
- a-z
- f1-f12
- Arrows: left, top, right, down

## API

### shortway(command, callback)

#### command
A sequence of keys to be watched.

##### Examples:
```javascript
shortway('r', callback)
shortway('ctrl+9', callback)
shortway('alt+a', callback)
shortway('shift+space', callback)
```

#### callback
A callback to be executed when a sequence of keys is predded.

##### Examples:
```javascript
const callback = e => {
  console.log(e)
}

shortway('r', callback)
```

## Contributing
See the [contributing file](CONTRIBUTING.md).

## License
[MIT License](LICENSE.md) &copy; [Thiago Santos](https://thiamsantos.github.io/)
