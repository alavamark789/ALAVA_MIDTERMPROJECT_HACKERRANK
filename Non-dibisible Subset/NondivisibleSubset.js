

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

function nonDivisibleSubset(k, s) {
    let freq = new Array(k).fill(0);
    for (let num of s) {
        freq[num % k]++;
    }
    let count = Math.min(freq[0], 1);
    for (let i = 1; i <= Math.floor(k / 2); i++) {
        if (i === k - i) {
            count++;
        } else {
            count += Math.max(freq[i], freq[k - i]);
        }
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const firstMultipleInput = readLine().trim().split(' ');
    const n = parseInt(firstMultipleInput[0], 10);
    const k = parseInt(firstMultipleInput[1], 10);
    const s = readLine().trim().split(' ').map(Number);
    const result = nonDivisibleSubset(k, s);
    ws.write(result + '\n');
    ws.end();
}
