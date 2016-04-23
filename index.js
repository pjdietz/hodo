#!/usr/bin/env node

const commander = require('commander');
const version = require('./package').version;

commander
    .version(version)
    .arguments('<cmd...>');
commander.parse(process.argv);

const args = process.argv.slice(2);
if (args.length < 2) {
    commander.help();
}

console.log(args);
