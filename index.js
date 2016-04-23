#!/usr/bin/env node

'use strict';

const child_process = require('child_process');
const commander = require('commander');
const version = require('./package').version;

commander
    .version(version)
    .usage('[options] <cmd...>');
commander.parse(process.argv);

const args = process.argv.slice(2);
if (args.length < 2) {
    commander.help();
}

console.log(args);

let proc = child_process.spawn(args[0], args.slice(1));
proc.on('close', (code) => {
    if (code !== 0) {
        console.error('HODOR!');
    } else {
        console.log('Hodor.');
    }
});

