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

function saveThePrisoner(n, m, s) {
    let result = (s + m - 1) % n;
    return result === 0 ? n : result;
}

function main() {
    const t = parseInt(readLine().trim(), 10);
    for (let tItr = 0; tItr < t; tItr++) {
        const [n, m, s] = readLine().trim().split(' ').map(Number);
        const result = saveThePrisoner(n, m, s);
        console.log(result);
    }
}
