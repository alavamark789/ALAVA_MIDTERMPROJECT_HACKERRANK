'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function getMoneySpent(keyboards, drives, b) {
    let maxSpent = -1;
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            let cost = keyboards[i] + drives[j];
            if (cost <= b && cost > maxSpent) {
                maxSpent = cost;
            }
        }
    }
    return maxSpent;
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');
    const b = parseInt(firstMultipleInput[0], 10);
    const n = parseInt(firstMultipleInput[1], 10);
    const m = parseInt(firstMultipleInput[2], 10);

    const keyboards = readLine().replace(/\s+$/g, '').split(' ').map(Number);
    const drives = readLine().replace(/\s+$/g, '').split(' ').map(Number);

    const moneySpent = getMoneySpent(keyboards, drives, b);
    console.log(moneySpent);
}
