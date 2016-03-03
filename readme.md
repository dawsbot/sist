# sist
[![npm version](https://img.shields.io/npm/v/sist.svg)](https://www.npmjs.com/package/sist)
[![Build Status](https://travis-ci.org/dawsonbotsford/sist.svg?branch=master)](https://travis-ci.org/dawsonbotsford/sist)
[![npm download count](http://img.shields.io/npm/dm/sist.svg?style=flat)](http://npmjs.org/sist)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> cli to print system information in markdown format

<br>

## Demo
![demo](./demo.gif)


<br>

## Install

```
$ npm install -g sist
```

<br>

## Usage
```
$ sist shell node

### shell  
`uname`: Darwin
`echo $SHELL`: /bin/zsh
`echo $TERM`: xterm-256color
`echo $TERM_PROGRAM`: iTerm.app

### node  
`npm -v`: 3.6.0
`node --version`: v5.6.0

Time created: Mon Feb 29 2016 00:14:54 GMT-0500 (EST)

```

<br>

---
Sist outputs markdown. This means that it gets parsed beautifully in GitHub **issues**, **pull requests**, and **wiki's**.

### shell  
`uname`: Darwin  
`echo $SHELL`: /bin/zsh  
`echo $TERM`: xterm-256color  
`echo $TERM_PROGRAM`: iTerm.app  

### node  
`npm -v`: 3.6.0  
`node --version`: v5.6.0  

Time created: Mon Feb 29 2016 00:14:54 GMT-0500 (EST)

<br>

---
Tell your users to create issues using sist by placing information in [.github/issue_template.md](.github/issue_template.md)

<br>

## More help
```
$ sist --help

  Usage
    sist [languages]

  Examples
    $ sist ruby

      [sist](https://github.com/dawsonbotsford/sist) output:

      ### ruby  
      `ruby --version`: ruby 2.2.1p85 (2015-02-26 revision 49769) [x86_64-darwin14]

      Time created: Thu Mar 03 2016 12:48:02 GMT-0700 (MST)

    $ sist shell go
      [sist](https://github.com/dawsonbotsford/sist) output:

      ### shell  
      `uname`: Darwin
      `echo $SHELL`: /bin/zsh
      `echo $TERM`: xterm-256color
      `echo $TERM_PROGRAM`: iTerm.app
      `a`: `error, return code 127`

      ### go  
      `go --version`: `error, return code 127`

      Time created: Thu Mar 03 2016 12:48:39 GMT-0700 (MST)
```

<br>

## License

MIT © [Dawson Botsford](http://dawsonbotsford.com)

<br>

---
If you like this, star it. If you want to follow me, follow me.
