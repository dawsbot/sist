'use strict';
var exec = require('child_process').exec;

var datetime = new Date();
let outputInfo = `Time created: ${datetime}  \n`;
const toExec = ['node --version', 'npm -v'];

const shellExec = (childText, child, cb) => {
  child.stdout.on('data', function (data) {
    outputInfo += `\`${childText}\`: ${data}  \n`;
  });

  child.on('close', function () {
    cb(outputInfo);
  });
};

module.exports = function () {
  for (let command of toExec) {
    shellExec(command, exec(command), console.log);
  }
};
