'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function kaprekarNumbers(p, q) {
    let result = [];
    for (let i = p; i <= q; i++) {
        let sq = BigInt(i) * BigInt(i);
        let str = sq.toString();
        let d = i.toString().length;
        let right = str.slice(-d);
        let left = str.slice(0, str.length - d) || "0";
        if (BigInt(left) + BigInt(right) === BigInt(i)) {
            result.push(i);
        }
    }
    if (result.length === 0) {
        console.log("INVALID RANGE");
    } else {
        console.log(result.join(' '));
    }
}

function main() {
    const p = parseInt(readLine().trim(), 10);
    const q = parseInt(readLine().trim(), 10);
    kaprekarNumbers(p, q);
}
