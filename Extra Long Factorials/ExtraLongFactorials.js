'use strict';

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

function extraLongFactorials(n) {
    let result = 1n; // BigInt
    for (let i = 2n; i <= BigInt(n); i++) {
        result *= i;
    }
    console.log(result.toString());
}

function main() {
    const n = parseInt(readLine(), 10);
    extraLongFactorials(n);
}
