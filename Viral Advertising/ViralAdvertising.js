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

function viralAdvertising(n) {
    let shared = 5;
    let cumulative = 0;
    for (let day = 1; day <= n; day++) {
        let liked = Math.floor(shared / 2);
        cumulative += liked;
        shared = liked * 3;
    }
    return cumulative;
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const result = viralAdvertising(n);
    console.log(result);
}
