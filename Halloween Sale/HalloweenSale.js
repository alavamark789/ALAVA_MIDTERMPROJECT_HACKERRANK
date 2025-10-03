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

function howManyGames(p, d, m, s) {
    let games = 0;
    let cost = p;
    let budget = s;

    while (budget >= cost) {
        budget -= cost;
        games++;
        cost = Math.max(cost - d, m);
    }
    return games;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const p = parseInt(firstMultipleInput[0], 10);
    const d = parseInt(firstMultipleInput[1], 10);
    const m = parseInt(firstMultipleInput[2], 10);
    const s = parseInt(firstMultipleInput[3], 10);

    const answer = howManyGames(p, d, m, s);

    ws.write(answer + '\n');
    ws.end();
}
