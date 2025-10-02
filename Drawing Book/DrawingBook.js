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

function pageCount(n, p) {
    let fromFront = Math.floor(p / 2);
    let fromBack = Math.floor(n / 2) - Math.floor(p / 2);
    return Math.min(fromFront, fromBack);
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const p = parseInt(readLine().trim(), 10);

    const result = pageCount(n, p);

    console.log(result);
}
