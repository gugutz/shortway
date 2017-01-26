# Shortway
[![Travis](https://img.shields.io/travis/thiamsantos/shortway.svg)](https://travis-ci.org/thiamsantos/shortway)
[![Coveralls](https://img.shields.io/coveralls/thiamsantos/shortway.svg)](https://coveralls.io/github/thiamsantos/shortway?branch=master)
[![npm (scoped)](https://img.shields.io/npm/v/shortway.svg)](https://www.npmjs.com/package/shortway)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

>A shortway to handle keyboard shortcuts.

## Install
This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

```sh
$ npm install --dev shortway
```

## Usage
```javascript
import shortway from 'shortway'

const spaceShortcut = shortway('ctrl+space')
document.addEventListener('keyup')
```

## Contributing
See the [contributing file](CONTRIBUTING.md).

## License
[MIT License](LICENSE.md) &copy; [Thiago Santos](https://thiamsantos.github.io/)
