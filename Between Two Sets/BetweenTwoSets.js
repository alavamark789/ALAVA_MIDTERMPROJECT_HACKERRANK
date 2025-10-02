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

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function getTotalX(a, b) {
    let l = a.reduce((acc, val) => lcm(acc, val));
    let g = b.reduce((acc, val) => gcd(acc, val));
    let count = 0;

    for (let i = l; i <= g; i += l) {
        if (g % i === 0) count++;
    }
    return count;
}

function main() {
    const [n, m] = readLine().split(' ').map(Number);
    const a = readLine().split(' ').map(Number);
    const b = readLine().split(' ').map(Number);

    console.log(getTotalX(a, b));
}
