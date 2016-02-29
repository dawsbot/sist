/* eslint no-else-return:0, no-loop-func:0, guard-for-in:0 */
'use strict';
const shell = require('shelljs');

var datetime = new Date();
let commands = {};
commands.shell = ['uname', 'echo $SHELL', 'echo $TERM', 'echo $TERM_PROGRAM', 'a'];
commands.node = ['npm -v', 'node --version'];
let outputInfo = '[sist](https://github.com/dawsonbotsford/sist) output:\n';

const shellExec = (command) => {
  let executed = shell.exec(command, {silent: true});
  if (executed.code === 0) {
    return `\`${command}\`: ${executed.output}`;
  }
};

module.exports = function () {
  for (let type in commands) {
    outputInfo += `\n### ${type}  \n`;
    commands[type].forEach(command => {
      const resp = shellExec(command);
      if (resp !== undefined) {
        outputInfo += resp;
      }
    });
  }
  return outputInfo + `\n\nTime created: ${datetime}`;
};
