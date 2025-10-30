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

function nimGame(pile) {
    let xorSum = 0;
    for (let stones of pile) {
        xorSum ^= stones;
    }
    return xorSum === 0 ? "Second" : "First";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const g = parseInt(readLine().trim(), 10);

    for (let gItr = 0; gItr < g; gItr++) {
        const n = parseInt(readLine().trim(), 10);
        const pile = readLine().replace(/\s+$/g, '').split(' ').map(Number);
        const result = nimGame(pile);
        ws.write(result + '\n');
    }

    ws.end();
}
