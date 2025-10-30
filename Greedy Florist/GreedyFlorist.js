'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function getMinimumCost(k, c) {
    c.sort((a, b) => b - a); // buy expensive flowers first
    let totalCost = 0;
    for (let i = 0; i < c.length; i++) {
        let multiplier = Math.floor(i / k) + 1;
        totalCost += multiplier * c[i];
    }
    return totalCost;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH || '/dev/stdout');

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);
    const k = parseInt(nk[1], 10);
    const c = readLine().split(' ').map(Number);

    const minimumCost = getMinimumCost(k, c);

    ws.write(minimumCost + '\n');
    ws.end();
}
