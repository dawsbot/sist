# sist
[![npm version](https://img.shields.io/npm/v/sist.svg)](https://www.npmjs.com/package/sist)
[![Build Status](https://travis-ci.org/dawsonbotsford/sist.svg?branch=master)](https://travis-ci.org/dawsonbotsford/sist)
[![npm download count](http://img.shields.io/npm/dm/sist.svg?style=flat)](http://npmjs.org/sist)

> npm module to Print system information

<br>

## Install

```
npm install --save sist
```


<br>

## Usage

```js
const sist = require('sist');

sist('hackathons');
//=> 'hackathons & rainbows'
```


<br>

## API

### sist(target)

##### target

Type: `string` || `Array`

Print system information

<br>

## CLI

```
$ npm install --global sist
```

```
$ sist --help

  Usage
    sist [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ sist
    hackathons & rainbows
    $ sist ponies
    ponies & rainbows

<br>
```

## License

[Do What The F*ck You Want To Public License v2 (WTFPL-2.0)](https://tldrlegal.com/l/wtfpl) © [Dawson Botsford](http://dawsonbotsford.com)


---
If you like this, star it. If you want to follow me, follow me.
