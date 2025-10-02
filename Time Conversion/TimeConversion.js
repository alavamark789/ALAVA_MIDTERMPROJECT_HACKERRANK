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


function timeConversion(s) {
    
    const period = s.slice(-2);
    let hour = parseInt(s.slice(0, 2), 10);
    const rest = s.slice(2, 8);

    if (period === 'AM') {
        if (hour === 12) hour = 0; 
    } else { 
        if (hour !== 12) hour += 12; 
    }

    
    return String(hour).padStart(2, '0') + rest;
}

function main() {
    const s = readLine().trim();

    const result = timeConversion(s);

    console.log(result);
}
