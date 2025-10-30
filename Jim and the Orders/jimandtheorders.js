'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => inputString += inputStdin);

process.stdin.on('end', () => {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function jimOrders(orders) {
    return orders
        .map((order, index) => [order[0] + order[1], index + 1])
        .sort((a, b) => a[0] - b[0])
        .map(item => item[1]);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH || '/dev/stdout');

    const n = parseInt(readLine().trim(), 10);
    let orders = [];
    for (let i = 0; i < n; i++) {
        orders.push(readLine().split(' ').map(Number));
    }

    const result = jimOrders(orders);
    ws.write(result.join(' ') + '\n');
    ws.end();
}
