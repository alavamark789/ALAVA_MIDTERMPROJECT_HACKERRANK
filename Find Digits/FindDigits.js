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

function findDigits(n) {
    let count = 0;
    for (let d of String(n)) {
        let digit = Number(d);
        if (digit !== 0 && n % digit === 0) count++;
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const t = parseInt(readLine(), 10);

    for (let i = 0; i < t; i++) {
        const n = parseInt(readLine(), 10);
        ws.write(findDigits(n) + '\n');
    }

    ws.end();
}
