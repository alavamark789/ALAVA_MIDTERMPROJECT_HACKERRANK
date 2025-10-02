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
    main();
});

function readLine() {
    return inputString[currentLine++];
}



function birthdayCakeCandles(candles) {
   
    let maxHeight = Math.max(...candles);
   
    let count = candles.filter(h => h === maxHeight).length;
    return count;
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const candles = readLine().trim().split(' ').map(Number);
    
    const result = birthdayCakeCandles(candles);
    console.log(result);
}
