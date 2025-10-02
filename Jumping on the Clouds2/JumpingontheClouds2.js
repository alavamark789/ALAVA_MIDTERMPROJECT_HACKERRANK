'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => inputString += inputStdin);
process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function jumpingOnClouds(c) {
    let jumps = 0;
    let i = 0;
    while (i < c.length - 1) {
        if (i + 2 < c.length && c[i + 2] === 0) {
            i += 2;
        } else {
            i += 1;
        }
        jumps++;
    }
    return jumps;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const n = parseInt(readLine().trim(), 10);
    const c = readLine().trim().split(' ').map(Number);
    const result = jumpingOnClouds(c);
    ws.write(result + '\n');
    ws.end();
}
