'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function catAndMouse(x, y, z) {
    const distA = Math.abs(x - z);
    const distB = Math.abs(y - z);

    if (distA < distB) return "Cat A";
    if (distB < distA) return "Cat B";
    return "Mouse C";
}

function main() {
    const q = parseInt(readLine().trim(), 10);
    for (let i = 0; i < q; i++) {
        const [x, y, z] = readLine().split(' ').map(Number);
        console.log(catAndMouse(x, y, z));
    }
}
