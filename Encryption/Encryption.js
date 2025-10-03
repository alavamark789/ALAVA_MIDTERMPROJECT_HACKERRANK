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

function encryption(s) {
    s = s.replace(/\s/g, '');
    let L = s.length;
    let rows = Math.floor(Math.sqrt(L));
    let cols = Math.ceil(Math.sqrt(L));
    if (rows * cols < L) rows++;

    let result = [];
    for (let c = 0; c < cols; c++) {
        let word = '';
        for (let r = 0; r < rows; r++) {
            let index = r * cols + c;
            if (index < L) word += s[index];
        }
        result.push(word);
    }
    return result.join(' ');
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = encryption(s);

    ws.write(result + '\n');

    ws.end();
}
