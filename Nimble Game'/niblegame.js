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

function nimbleGame(s) {
    let xorSum = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] % 2 !== 0) {
            xorSum ^= i;
        }
    }
    
    return xorSum === 0 ? "Second" : "First";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);
        const s = readLine().replace(/\s+$/g, '').split(' ').map(Number);
        const result = nimbleGame(s);
        ws.write(result + '\n');
    }

    ws.end();
}
