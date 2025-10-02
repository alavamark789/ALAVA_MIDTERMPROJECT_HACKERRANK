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



function staircase(n) {
    for (let i = 1; i <= n; i++) {
      
        let spaces = ' '.repeat(n - i);
        let hashes = '#'.repeat(i);
        console.log(spaces + hashes);
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    staircase(n);
}
