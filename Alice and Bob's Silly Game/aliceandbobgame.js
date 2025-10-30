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

function countPrimes(n) {
    if (n < 2) return 0;
    const isPrime = Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    return isPrime.reduce((sum, val) => sum + (val ? 1 : 0), 0);
}

function sillyGame(n) {
    const primes = countPrimes(n);
    return primes % 2 === 0 ? "Bob" : "Alice";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const g = parseInt(readLine().trim(), 10);
    for (let gItr = 0; gItr < g; gItr++) {
        const n = parseInt(readLine().trim(), 10);
        const result = sillyGame(n);
        ws.write(result + '\n');
    }
    ws.end();
}
