'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', () => {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function pylons(k, arr) {
    const n = arr.length;
    let count = 0;
    let i = 0;

    while (i < n) {
        let plantPos = -1;
        let start = Math.max(i - k + 1, 0);
        let end = Math.min(i + k - 1, n - 1);

        for (let j = end; j >= start; j--) {
            if (arr[j] === 1) {
                plantPos = j;
                break;
            }
        }

        if (plantPos === -1) return -1;

        count++;
        i = plantPos + k;
    }

    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const firstMultipleInput = readLine().split(' ');
    const n = parseInt(firstMultipleInput[0], 10);
    const k = parseInt(firstMultipleInput[1], 10);
    const arr = readLine().split(' ').map(Number);
    const result = pylons(k, arr);
    ws.write(result + '\n');
    ws.end();
}
