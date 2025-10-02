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

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = apples.map(d => d + a).filter(pos => pos >= s && pos <= t).length;
    let orangeCount = oranges.map(d => d + b).filter(pos => pos >= s && pos <= t).length;
    console.log(appleCount);
    console.log(orangeCount);
}

function main() {
    const st = readLine().split(' ').map(Number);
    const ab = readLine().split(' ').map(Number);
    const mn = readLine().split(' ').map(Number);
    const apples = readLine().split(' ').map(Number);
    const oranges = readLine().split(' ').map(Number);

    countApplesAndOranges(st[0], st[1], ab[0], ab[1], apples, oranges);
}
