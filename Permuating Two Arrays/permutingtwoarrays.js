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

function twoArrays(k, A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    for (let i = 0; i < A.length; i++) {
        if (A[i] + B[i] < k) return "NO";
    }
    return "YES";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH || '/dev/stdout');

    const q = parseInt(readLine().trim(), 10);

    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().trim().split(' ').map(Number);
        const A = readLine().trim().split(' ').map(Number);
        const B = readLine().trim().split(' ').map(Number);

        const result = twoArrays(k, A, B);
        ws.write(result + '\n');
    }

    ws.end();
}
