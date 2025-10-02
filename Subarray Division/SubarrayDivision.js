'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.trim().split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function birthday(s, d, m) {
    let count = 0;
    for (let i = 0; i <= s.length - m; i++) {
        let segment = s.slice(i, i + m);
        let sum = segment.reduce((a, b) => a + b, 0);
        if (sum === d) count++;
    }
    return count;
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const s = readLine().split(' ').map(Number);
    const [d, m] = readLine().split(' ').map(Number);
    const result = birthday(s, d, m);
    console.log(result);
}
