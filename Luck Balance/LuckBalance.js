'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => inputString += inputStdin);
process.stdin.on('end', () => {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function luckBalance(k, contests) {
    // Separate contests into important and unimportant
    let important = [];
    let totalLuck = 0;

    for (let [luck, importance] of contests) {
        if (importance === 1) {
            important.push(luck);
        } else {
            totalLuck += luck; // Can always lose unimportant contests
        }
    }

    // Sort important contests descending
    important.sort((a, b) => b - a);

    // Lose k most valuable important contests
    for (let i = 0; i < important.length; i++) {
        if (i < k) {
            totalLuck += important[i];
        } else {
            totalLuck -= important[i];
        }
    }

    return totalLuck;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH || '/dev/stdout');

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');
    const n = parseInt(firstMultipleInput[0], 10);
    const k = parseInt(firstMultipleInput[1], 10);

    let contests = Array(n);
    for (let i = 0; i < n; i++) {
        contests[i] = readLine().replace(/\s+$/g, '').split(' ').map(Number);
    }

    const result = luckBalance(k, contests);
    ws.write(result + '\n');

    ws.end();
}
