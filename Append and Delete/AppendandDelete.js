'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => inputString += inputStdin);
process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function appendAndDelete(s, t, k) {
    let commonLength = 0;
    for (let i = 0; i < Math.min(s.length, t.length); i++) {
        if (s[i] === t[i]) commonLength++;
        else break;
    }
    let minOps = (s.length - commonLength) + (t.length - commonLength);
    if (k >= s.length + t.length) return "Yes";
    if (k >= minOps && (k - minOps) % 2 === 0) return "Yes";
    return "No";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const s = readLine();
    const t = readLine();
    const k = parseInt(readLine(), 10);
    const result = appendAndDelete(s, t, k);
    ws.write(result + '\n');
    ws.end();
}
