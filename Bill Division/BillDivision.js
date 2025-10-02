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

function bonAppetit(bill, k, b) {
    let total = bill.reduce((a, c) => a + c, 0);
    let annaShare = (total - bill[k]) / 2;
    if (b === annaShare) {
        console.log("Bon Appetit");
    } else {
        console.log(b - annaShare);
    }
}

function main() {
    const nk = readLine().split(' ');
    const n = parseInt(nk[0], 10);
    const k = parseInt(nk[1], 10);
    const bill = readLine().split(' ').map(Number);
    const b = parseInt(readLine().trim(), 10);
    bonAppetit(bill, k, b);
}
