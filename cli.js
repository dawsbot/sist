#!/usr/bin/env node
'use strict';
const meow = require('meow');
const sist = require('./');
const updateNotifier = require('update-notifier');

const cli = meow([
  'Usage',
  '  $ sist [languages]',
  '',
  'Examples',
  '  $ sist shell node',
  '',
  '    ### shell',
  '    `uname`: Darwin',
  '    `echo $SHELL`: /bin/zsh',
  '    `echo $TERM`: xterm-256color',
  '    `echo $TERM_PROGRAM`: iTerm.app',
  '',
  '    ### node',
  '    `npm -v`: 3.6.0',
  '    `node --version`: v5.6.0',
  '',
  '    Time created: Mon Feb 29 2016 00:14:54 GMT-0500 (EST)',
  '',
  '',
  'OSX copy to clipboard example',
  '  $ sist | pbcopy'
]);

updateNotifier({pkg: cli.pkg}).notify();

console.log(sist(cli.input));
