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

function kangaroo(x1, v1, x2, v2) {
    if (v1 === v2) return x1 === x2 ? "YES" : "NO";
    return ((x2 - x1) % (v1 - v2) === 0 && (x2 - x1) / (v1 - v2) >= 0) ? "YES" : "NO";
}

function main() {
    const [x1, v1, x2, v2] = readLine().split(' ').map(Number);
    console.log(kangaroo(x1, v1, x2, v2));
}
