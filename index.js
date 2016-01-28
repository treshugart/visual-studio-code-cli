#! /usr/bin/env node

var exec = require('child_process').exec;
var args = process.argv.slice(2).join(' ');
var cwd = process.cwd();
var opts = ['g', 'n', 'b "com.microsoft.VSCode"'].map(function (a) {
  return '-' + a;
}).join(' ');

exec('VSCODE_CWD="' + cwd + '" open ' + opts + ' --args ' + args, function (err, sto, ste) {
  sto && console.log(sto);
  ste && console.error(ste);
  err && console.error(err);
});
