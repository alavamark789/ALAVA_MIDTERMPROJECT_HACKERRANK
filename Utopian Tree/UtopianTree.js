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
    inputString = inputString.trim().split('\n').map(str => str.trim());
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function utopianTree(n) {
    let height = 1;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1) {
            height *= 2; // spring
        } else {
            height += 1; // summer
        }
    }
    return height;
}

function main() {
    const t = parseInt(readLine(), 10);
    for (let i = 0; i < t; i++) {
        const n = parseInt(readLine(), 10);
        console.log(utopianTree(n));
    }
}
