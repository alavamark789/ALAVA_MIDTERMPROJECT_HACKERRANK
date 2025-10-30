'use strict';

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

function decentNumber(n) {
    for (let i = n; i >= 0; i--) {
        if (i % 3 === 0 && (n - i) % 5 === 0) {
            console.log('5'.repeat(i) + '3'.repeat(n - i));
            return;
        }
    }
    console.log(-1);
}

function main() {
    const t = parseInt(readLine().trim(), 10);
    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);
        decentNumber(n);
    }
}
