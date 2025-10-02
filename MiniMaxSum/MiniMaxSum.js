'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.trim().split('\n').map(str => str.trim());
    main();
});

function readLine() {
    return inputString[currentLine++];
}


function miniMaxSum(arr) {
   
    let totalSum = arr.reduce((a, b) => a + b, 0);
    let min = Math.min(...arr);
    let max = Math.max(...arr);

  
    let minSum = totalSum - max;
    let maxSum = totalSum - min;

    console.log(minSum + " " + maxSum);
}

function main() {
    const arr = readLine().split(' ').map(Number);
    miniMaxSum(arr);
}
