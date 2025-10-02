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

function migratoryBirds(arr) {
    let freq = new Array(6).fill(0);
    for (let bird of arr) {
        freq[bird]++;
    }
    let maxCount = 0;
    let result = 0;
    for (let i = 1; i <= 5; i++) {
        if (freq[i] > maxCount) {
            maxCount = freq[i];
            result = i;
        }
    }
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);
    const arr = readLine().trim().split(' ').map(Number);

    const result = migratoryBirds(arr);

    ws.write(result + '\n');
    ws.end();
}
