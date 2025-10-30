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

function maximumPerimeterTriangle(sticks) {
    // Sort sticks in ascending order
    sticks.sort((a, b) => a - b);

    // Traverse from largest to smallest to find non-degenerate triangle
    for (let i = sticks.length - 1; i >= 2; i--) {
        const a = sticks[i - 2];
        const b = sticks[i - 1];
        const c = sticks[i];
        if (a + b > c) {
            // Found triangle, return in ascending order
            return [a, b, c];
        }
    }

    // If no triangle can be formed
    return [-1];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH || '/dev/stdout');

    const n = parseInt(readLine().trim(), 10);
    const sticks = readLine().replace(/\s+$/g, '').split(' ').map(Number);

    const result = maximumPerimeterTriangle(sticks);
    ws.write(result.join(' ') + '\n');

    ws.end();
}
