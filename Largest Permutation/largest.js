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

function largestPermutation(k, arr) {
    const n = arr.length;
    const pos = Array(n + 1);
    for (let i = 0; i < n; i++) pos[arr[i]] = i;

    for (let i = 0; i < n && k > 0; i++) {
        if (arr[i] === n - i) continue;
        const idx = pos[n - i];
        pos[arr[i]] = idx;
        arr[idx] = arr[i];
        arr[i] = n - i;
        pos[n - i] = i;
        k--;
    }

    return arr;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH || '/dev/stdout');

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');
    const n = parseInt(firstMultipleInput[0], 10);
    const k = parseInt(firstMultipleInput[1], 10);
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(Number);

    const result = largestPermutation(k, arr);
    ws.write(result.join(' ') + '\n');
    ws.end();
}
