'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => inputString += inputStdin);
process.stdin.on('end', () => {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function beautifulPairs(A, B) {
    const countA = {};
    const countB = {};
    let pairs = 0;

    for (const x of A) countA[x] = (countA[x] || 0) + 1;
    for (const x of B) countB[x] = (countB[x] || 0) + 1;

    for (const key in countA) {
        if (countB[key]) {
            pairs += Math.min(countA[key], countB[key]);
        }
    }

    if (pairs < A.length) return pairs + 1;
    return pairs - 1;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH || '/dev/stdout');
    const n = parseInt(readLine().trim(), 10);
    const A = readLine().trim().split(' ').map(Number);
    const B = readLine().trim().split(' ').map(Number);
    const result = beautifulPairs(A, B);
    ws.write(result + '\n');
    ws.end();
}
