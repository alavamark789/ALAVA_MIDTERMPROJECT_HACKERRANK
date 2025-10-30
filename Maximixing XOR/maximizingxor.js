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

function maximizingXor(l, r) {
    let maxXor = 0;
    for (let a = l; a <= r; a++) {
        for (let b = a; b <= r; b++) { // start from a to avoid duplicates
            maxXor = Math.max(maxXor, a ^ b);
        }
    }
    return maxXor;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const l = parseInt(readLine().trim(), 10);
    const r = parseInt(readLine().trim(), 10);

    const result = maximizingXor(l, r);

    ws.write(result + '\n');
    ws.end();
}
