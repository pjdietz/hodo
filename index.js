#!/usr/bin/env node

'use strict';

const child_process = require('child_process');
const ora = require('ora');
const spinners = require('cli-spinners');
const version = require('./package').version;

let args = process.argv.slice(2);
if (!args.length) {
    showHelp();
    process.exit(1);
}
switch (args[0]) {
    case '-h':
    case '--help':
        showHelp();
        process.exit(1);
        break;
    case '-v':
    case '--version':
        showVersion();
        process.exit(0);
        break;
    case '--hodor':
        console.log('Hodor. Hodor! HODOR!');
        process.exit(0);
        break;
    default:
        if (args[0][0] === '-') {
            console.error('Hodor?');
            showHelp();
            process.exit(1);
            break;
        }
        break;
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

function showHelp() {
    console.error(`
    Hodor: [hodor]
        
    Hodors: 
    
        -h, --hodor    Hodor?
        -v, --hodor    Hodor hodor.
        --hodor        Hodor. Hodor! HODOR!
`);
}
function showVersion() {
    console.log(`hodo ${version} (hodor) (Hodor: Hodor ho-hodor)
Hodor (h) 2016 Hodor`);
}
