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

function queensAttack(n, k, r_q, c_q, obstacles) {
    let obstacleSet = new Set(obstacles.map(o => o.join(',')));

    let directions = [
        [1, 0],  [-1, 0],   // vertical
        [0, 1],  [0, -1],   // horizontal
        [1, 1],  [1, -1],   // diagonal
        [-1, 1], [-1, -1]
    ];

    let count = 0;

    for (let [dr, dc] of directions) {
        let r = r_q + dr;
        let c = c_q + dc;

        while (r >= 1 && r <= n && c >= 1 && c <= n && !obstacleSet.has(r + ',' + c)) {
            count++;
            r += dr;
            c += dc;
        }
    }

    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().split(' ');

    const n = parseInt(firstMultipleInput[0], 10);
    const k = parseInt(firstMultipleInput[1], 10);

    const secondMultipleInput = readLine().split(' ');

    const r_q = parseInt(secondMultipleInput[0], 10);
    const c_q = parseInt(secondMultipleInput[1], 10);

    let obstacles = Array(k);

    for (let i = 0; i < k; i++) {
        obstacles[i] = readLine().split(' ').map(Number);
    }

    const result = queensAttack(n, k, r_q, c_q, obstacles);

    ws.write(result + '\n');
    ws.end();
}
