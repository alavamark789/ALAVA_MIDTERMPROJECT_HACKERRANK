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

function libraryFine(d1, m1, y1, d2, m2, y2) {
    if (y1 > y2) return 10000;
    if (y1 < y2) return 0;
    if (m1 > m2) return 500 * (m1 - m2);
    if (m1 < m2) return 0;
    if (d1 > d2) return 15 * (d1 - d2);
    return 0;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const [d1, m1, y1] = readLine().split(' ').map(Number);
    const [d2, m2, y2] = readLine().split(' ').map(Number);

    const result = libraryFine(d1, m1, y1, d2, m2, y2);

    ws.write(result + '\n');
    ws.end();
}
