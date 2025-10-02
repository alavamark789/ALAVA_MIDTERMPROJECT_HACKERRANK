'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function designerPdfViewer(h, word) {
    let maxHeight = 0;
    for (let char of word) {
        let index = char.charCodeAt(0) - 'a'.charCodeAt(0); 
        maxHeight = Math.max(maxHeight, h[index]);
    }
    return maxHeight * word.length;
}

function main() {
    const h = readLine().split(' ').map(Number);
    const word = readLine();
    
    const result = designerPdfViewer(h, word);
    console.log(result);
}
