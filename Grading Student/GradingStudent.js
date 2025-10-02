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

function gradingStudents(grades) {
    return grades.map(grade => {
        if (grade < 38) return grade;
        let nextMultipleOf5 = Math.ceil(grade / 5) * 5;
        if (nextMultipleOf5 - grade < 3) return nextMultipleOf5;
        return grade;
    });
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    let grades = [];
    for (let i = 0; i < n; i++) {
        grades.push(parseInt(readLine().trim(), 10));
    }
    const result = gradingStudents(grades);
    console.log(result.join('\n'));
}
