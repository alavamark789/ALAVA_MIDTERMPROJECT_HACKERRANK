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

function circularArrayRotation(a, k, queries) {
    let n = a.length;
    let result = [];
    for (let q of queries) {
        result.push(a[(n - (k % n) + q) % n]);
    }
    return result;
}

function main() {
    const [n, k, q] = readLine().trim().split(' ').map(Number);
    const a = readLine().trim().split(' ').map(Number);
    let queries = [];
    for (let i = 0; i < q; i++) {
        queries.push(parseInt(readLine().trim(), 10));
    }
    const result = circularArrayRotation(a, k, queries);
    console.log(result.join('\n'));
}
