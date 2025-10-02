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

function repeatedString(s, n) {
    let countInS = (s.match(/a/g) || []).length;
    let fullRepeats = Math.floor(n / s.length);
    let remainder = n % s.length;
    let countInRemainder = (s.slice(0, remainder).match(/a/g) || []).length;
    return countInS * fullRepeats + countInRemainder;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const s = readLine();
    const n = parseInt(readLine().trim(), 10);
    const result = repeatedString(s, n);
    ws.write(result + '\n');
    ws.end();
}
