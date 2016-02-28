/* eslint no-else-return:0 */
'use strict';
const shell = require('shelljs');

var datetime = new Date();
let outputInfo = `[sist](https://github.com/dawsonbotsford/sist) output:\nTime created: ${datetime}  \n`;
const toExec = ['node --version', 'npm -v'];

const shellExec = (command) => {
  let executed = shell.exec(command, {silent: true});
  if (executed.code === 0) {
    return `\`${command}\`: ${executed.output}`;
  } else {
    return null;
  }
};

module.exports = function () {
  toExec.forEach(command => {
    outputInfo += shellExec(command);
  });
  return outputInfo;
};
