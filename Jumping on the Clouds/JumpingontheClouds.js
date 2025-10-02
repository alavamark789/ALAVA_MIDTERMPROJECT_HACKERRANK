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

function jumpingOnClouds(c, k) {
    let energy = 100, pos = 0;
    do {
        pos = (pos + k) % c.length;
        energy -= (c[pos] === 1 ? 3 : 1);
    } while (pos !== 0);
    return energy;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const [n, k] = readLine().split(' ').map(Number);
    const c = readLine().split(' ').map(Number);
    const result = jumpingOnClouds(c, k);
    ws.write(result + '\n');
    ws.end();
}
