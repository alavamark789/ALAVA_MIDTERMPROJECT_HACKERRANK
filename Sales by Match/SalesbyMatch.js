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

function sockMerchant(n, ar) {
    let colorCount = {};
    let pairs = 0;

    for (let sock of ar) {
        if (!colorCount[sock]) {
            colorCount[sock] = 0;
        }
        colorCount[sock]++;

        if (colorCount[sock] % 2 === 0) {
            pairs++;
        }
    }
    return pairs;
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const ar = readLine().split(' ').map(Number);
    const result = sockMerchant(n, ar);
    console.log(result);
}
