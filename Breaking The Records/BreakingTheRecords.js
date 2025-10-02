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

function breakingRecords(scores) {
    let min = scores[0];
    let max = scores[0];
    let minCount = 0;
    let maxCount = 0;

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > max) {
            max = scores[i];
            maxCount++;
        } else if (scores[i] < min) {
            min = scores[i];
            minCount++;
        }
    }

    return [maxCount, minCount];
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const scores = readLine().split(' ').map(Number);
    const result = breakingRecords(scores);
    console.log(result.join(' '));
}
