#!/usr/bin/env node
'use strict';
const meow = require('meow');
const sist = require('./');
const updateNotifier = require('update-notifier');

const cli = meow([
  'Usage',
  '  $ sist',
  '',
  'Examples',
  '  $ sist',
  '  `node --verson`: v5.6.0',
  '  `npm -v`: v3.6.0'
]);

updateNotifier({pkg: cli.pkg}).notify();

if (cli.input.length !== 0) {
  console.error('Takes no input args');
  process.exit(1);
}

console.log(sist());
