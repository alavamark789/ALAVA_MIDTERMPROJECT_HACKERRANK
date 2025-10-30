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

function gridChallenge(grid) {
    // Sort each row alphabetically
    grid = grid.map(row => row.split('').sort().join(''));

    const n = grid.length;
    const m = grid[0].length;

    // Check columns for ascending order
    for (let col = 0; col < m; col++) {
        for (let row = 1; row < n; row++) {
            if (grid[row][col] < grid[row - 1][col]) {
                return 'NO';
            }
        }
    }

    return 'YES';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH || '/dev/stdout');

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        let grid = [];
        for (let i = 0; i < n; i++) {
            grid.push(readLine().trim());
        }

        const result = gridChallenge(grid);
        ws.write(result + '\n');
    }

    ws.end();
}
