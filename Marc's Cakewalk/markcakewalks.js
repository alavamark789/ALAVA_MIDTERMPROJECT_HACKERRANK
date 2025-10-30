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

function marcsCakewalk(calorie) {
    // Sort the calories in descending order
    calorie.sort((a, b) => b - a);

    let total = 0;
    for (let i = 0; i < calorie.length; i++) {
        total += calorie[i] * Math.pow(2, i);
    }

    return total;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH || '/dev/stdout');

    const n = parseInt(readLine().trim(), 10);
    const calorie = readLine().trim().split(' ').map(Number);

    const result = marcsCakewalk(calorie);

    ws.write(result + '\n');
    ws.end();
}
