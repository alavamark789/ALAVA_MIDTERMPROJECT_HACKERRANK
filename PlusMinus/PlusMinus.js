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
    const n = parseInt(inputString[0], 10);
    const arr = inputString[1].split(' ').map(Number);
    plusMinus(arr);
});

function plusMinus(arr) {
    const n = arr.length;
    let positive = 0, negative = 0, zero = 0;

    for (let num of arr) {
        if (num > 0) positive++;
        else if (num < 0) negative++;
        else zero++;
    }

    console.log((positive / n).toFixed(6));
    console.log((negative / n).toFixed(6));
    console.log((zero / n).toFixed(6));
}
