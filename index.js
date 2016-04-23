#!/usr/bin/env node

'use strict';

const child_process = require('child_process');
const commander = require('commander');
const ora = require('ora');
const spinners = require('cli-spinners');
const version = require('./package').version;

commander
    .version(version)
    .usage('[options] <cmd...>');
commander.parse(process.argv);

let args = process.argv.slice(2);
if (!args.length) {
    commander.help();
}

let spinner = ora({
    color: 'gray',
    spinner: 'simpleDotsScrolling'}
);
spinner.start();

let child = child_process.spawn(args[0], args.slice(1));
child.on('close', (code) => {
    spinner.stop();
    if (code !== 0) {
        console.error('HODOR!');
    } else {
        console.log('Hodor.');
    }
    process.exit(code);
});
child.on('error', () => {
    spinner.stop();
    console.error('HODOR!');
    process.exit(1);
});

