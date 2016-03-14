/* eslint no-else-return:0, no-loop-func:0, guard-for-in:0 */
'use strict';
const shell = require('shelljs');
const chalk = require('chalk');
const arrify = require('arrify');

let commands = {};
commands.shell = ['uname', 'echo $SHELL', 'echo $TERM', 'echo $TERM_PROGRAM'];
commands.node = ['npm -v', 'node --version'];
commands.ruby = ['ruby --version'];
commands.go = ['go --version'];

let outputInfo = '[sist](https://github.com/dawsonbotsford/sist) output:\n';

const throwErr = (errMsg) => {
  console.error(chalk.red(errMsg));
  process.exit(1);
};

const shellExec = (command) => {
  let executed = shell.exec(command, {silent: true});
  if (executed.code === 0) {
    return `\`${command}\`: ${executed.output}`;
  } else {
    return `\`${command}\`: \`error, return code ${executed.code}\`\n`;
  }
};

module.exports = function (args) {
  // args = args || [];
  args = arrify(args);

  /* user wants a specific language type */
  if (args.length > 0) {
    for (let index in args) {
      const type = args[index];
      if (Object.keys(commands).indexOf(type) > -1) {
        outputInfo += `\n### ${type}  \n`;
        commands[type].forEach(command => {
          const resp = shellExec(command);
          if (resp !== undefined) {
            outputInfo += resp;
          }
        });
      } else {
        throwErr(`arg "${type}" is not a sist supported type`);
      }
      /*
      */
    }
  } else {
    /* user wants generic sist output of whole system */
    for (let type in commands) {
      outputInfo += `\n### ${type}  \n`;
      commands[type].forEach(command => {
        const resp = shellExec(command);
        if (resp !== undefined) {
          outputInfo += resp;
        }
      });
    }
  }
  return outputInfo + `\nTime created: ${new Date()}`;
};
