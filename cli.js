#!/usr/bin/env node
'use strict';
const meow = require('meow');
const sist = require('./');
const updateNotifier = require('update-notifier');

const cli = meow([
  'Usage',
  '  $ sist',
  '',
  'Options',
  '  --foo  Lorem ipsum. [Default: false]',
  '',
  'Examples',
  '  $ sist',
  '  unicorns & rainbows',
  '  $ sist ponies',
  '  ponies & rainbows'
]);

updateNotifier({pkg: cli.pkg}).notify();

if (cli.input.length !== 0) {
  console.error('Takes no input args');
  process.exit(1);
}

sist(console.log);
