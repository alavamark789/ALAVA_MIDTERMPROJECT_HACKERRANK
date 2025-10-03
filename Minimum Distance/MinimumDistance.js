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

function minimumDistances(a) {
    let map = new Map();
    let min = Infinity;

    for (let i = 0; i < a.length; i++) {
        if (map.has(a[i])) {
            min = Math.min(min, i - map.get(a[i]));
        }
        map.set(a[i], i);
    }

    return min === Infinity ? -1 : min;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);
    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = minimumDistances(a);

    ws.write(result + '\n');
    ws.end();
}
