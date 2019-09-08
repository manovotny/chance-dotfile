# chance-dotfile [![Build Status](https://travis-ci.org/manovotny/chance-dotfile.svg?branch=master)](https://travis-ci.org/manovotny/chance-dotfile)

> A [Chance.js mixin](http://chancejs.com/#mixin) to generate a dotfile.

## Install

### NPM

```
$ npm i chance-dotfile
```

### Yarn

```
$ yarn add chance-dotfile
```

## Usage

```js
import Chance from "chance";
import dotfile from "chance-dotfile";

const chance = new Chance();

chance.mixin({
    dotfile
});

chance.dotfile();
```

By default, `chance-dotfile` will return a randomly generated a dotfile.

Example: `.random`

## License

MIT © [Michael Novotny](http://manovotny.com)
