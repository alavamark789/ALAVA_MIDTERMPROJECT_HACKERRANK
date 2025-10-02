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

// Your function
function beautifulDays(i, j, k) {
    let count = 0;
    for (let day = i; day <= j; day++) {
        let reversedDay = parseInt(day.toString().split('').reverse().join(''));
        if (Math.abs(day - reversedDay) % k === 0) {
            count++;
        }
    }
    return count;
}

// Main
function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const i = parseInt(firstMultipleInput[0], 10);
    const j = parseInt(firstMultipleInput[1], 10);
    const k = parseInt(firstMultipleInput[2], 10);

    const result = beautifulDays(i, j, k);

    // Print output
    console.log(result);
}
