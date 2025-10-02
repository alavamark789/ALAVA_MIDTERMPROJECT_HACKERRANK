'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function organizingContainers(container) {
    let n = container.length;
    let containerCap = new Array(n).fill(0);
    let typeCount = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            containerCap[i] += container[i][j];
            typeCount[j] += container[i][j];
        }
    }

    containerCap.sort((a, b) => a - b);
    typeCount.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        if (containerCap[i] !== typeCount[i]) {
            return "Impossible";
        }
    }
    return "Possible";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine().trim(), 10);

        let container = Array(n);

        for (let i = 0; i < n; i++) {
            container[i] = readLine().trim().split(' ').map(Number);
        }

        const result = organizingContainers(container);

        ws.write(result + '\n');
    }

    ws.end();
}
