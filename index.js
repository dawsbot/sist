'use strict';
var exec = require('child_process').execSync;

var datetime = new Date();
let outputInfo = `sist creation date: ${datetime}  \n`;
const toExec = ['node --version', 'npm -v', 'whoami'];

let output = '';
const shellExec = (childText, child, cb) => {
  child.stdout.on('data', function (data) {
    output = `\`${childText}\`: ${data}  \n`;
  });

  child.on('close', function () {
    cb(output);
  });
};

module.exports = function () {
  const promises = toExec.map(command => {
    return new Promise(resolve => {
      shellExec(command, exec(command), response => {
        outputInfo += response;
        resolve();
      });
    });
  });

  Promise.all(promises)
  .then(() => {
    console.log(outputInfo);
  })
  .catch(console.error);
};
