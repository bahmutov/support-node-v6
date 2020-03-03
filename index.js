// provides polyfills for some common methods that
// 3rd party node_modules use like Object.entries
require('babel-polyfill')

const chalk = require('chalk')
console.log(`Chalk is ${chalk.red('working')} if you saw red`)

const execa = require('execa')
execa('ls', ['-la']).then(r => r.stdout).then(console.log)
