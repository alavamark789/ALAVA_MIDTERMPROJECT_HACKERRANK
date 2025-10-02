'use strict';

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

function cutTheSticks(arr) {
    let result = [];
    arr.sort((a, b) => a - b);
    while (arr.length > 0) {
        result.push(arr.length);
        let min = arr[0];
        arr = arr.filter(x => x > min).map(x => x - min);
    }
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const n = parseInt(readLine(), 10);
    const arr = readLine().split(' ').map(Number);
    const result = cutTheSticks(arr);
    ws.write(result.join('\n') + '\n');
    ws.end();
}
