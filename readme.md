# Deprecated

Deprecated as this package no longer serves a useful purpose. Generators have long been in browsers and Node.js now. The package will continue to work, I just won't maintain it anymore.

---

# has-generator [![Build Status](https://travis-ci.org/sindresorhus/has-generator.svg?branch=master)](https://travis-ci.org/sindresorhus/has-generator)

> Check if [generator functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) are supported


## Install

```
$ npm install --save has-generator
```


## Usage

```js
const hasGenerator = require('has-generator');
const app = require(hasGenerator ? './with-generator' : './fallback');
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
