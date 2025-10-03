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

function biggerIsGreater(w) {
    let arr = w.split('');
    let i = arr.length - 2;

    while (i >= 0 && arr[i] >= arr[i + 1]) i--;

    if (i < 0) return "no answer";

    let j = arr.length - 1;
    while (arr[j] <= arr[i]) j--;

    [arr[i], arr[j]] = [arr[j], arr[i]];

    let prefix = arr.slice(0, i + 1);
    let suffix = arr.slice(i + 1).reverse();

    return prefix.concat(suffix).join('');
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim(), 10);

    for (let TItr = 0; TItr < T; TItr++) {
        const w = readLine();
        const result = biggerIsGreater(w);
        ws.write(result + '\n');
    }

    ws.end();
}
