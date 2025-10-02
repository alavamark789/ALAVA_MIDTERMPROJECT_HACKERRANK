'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function hurdleRace(k, height) {
    let maxHeight = Math.max(...height);
    return maxHeight > k ? maxHeight - k : 0;
}

function main() {
    const firstLine = readLine().split(' ').map(Number);
    const n = firstLine[0];
    const k = firstLine[1];
    const height = readLine().split(' ').map(Number);
    
    const result = hurdleRace(k, height);
    console.log(result);
}
