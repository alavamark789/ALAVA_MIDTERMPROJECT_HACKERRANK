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

/**
 * Complete the 'matrixRotation' function below.
 *
 * The function accepts the following parameters:
 * 1. 2D_INTEGER_ARRAY matrix
 * 2. INTEGER r
 */

function matrixRotation(matrix, r) {
    const M = matrix.length;
    const N = matrix[0].length;
    // The number of concentric layers to rotate is min(M, N) / 2
    const layers = Math.floor(Math.min(M, N) / 2);

    // Iterate through each layer (k = 0 is the outermost layer)
    for (let k = 0; k < layers; k++) {
        // Define the boundaries for the current layer k
        const r_min = k;
        const c_min = k;
        const r_max = M - 1 - k;
        const c_max = N - 1 - k;

        const layer = [];

        // --- 1. Extract the current layer elements (Counter-Clockwise) ---

        // 1. Top row: from (r_min, c_min) to (r_min, c_max)
        for (let j = c_min; j <= c_max; j++) {
            layer.push(matrix[r_min][j]);
        }

        // 2. Right column: from (r_min + 1, c_max) to (r_max, c_max)
        if (r_max > r_min) { // Skip if it's a single row
            for (let i = r_min + 1; i <= r_max; i++) {
                layer.push(matrix[i][c_max]);
            }
        }

        // 3. Bottom row: from (r_max, c_max - 1) down to (r_max, c_min)
        // Check for single row AND more than one column
        if (r_max > r_min && c_max > c_min) {
            for (let j = c_max - 1; j >= c_min; j--) {
                layer.push(matrix[r_max][j]);
            }
        }

        // 4. Left column: from (r_max - 1, c_min) down to (r_min + 1, c_min)
        // Check for more than two rows AND more than one column
        if (r_max - 1 > r_min && c_max > c_min) {
            for (let i = r_max - 1; i > r_min; i--) {
                layer.push(matrix[i][c_min]);
            }
        }

        // --- 2. Calculate effective rotation and rotate the 1D array ---

        const perimeter = layer.length;
        if (perimeter === 0) continue;

        // Effective rotation (shifting elements to the left for CCW rotation)
        const effectiveRotation = r % perimeter;

        // Perform circular rotation
        // If effectiveRotation is 2, the array [1, 2, 3, 4] becomes [3, 4, 1, 2]
        const rotatedLayer = layer.slice(effectiveRotation).concat(layer.slice(0, effectiveRotation));

        // --- 3. Re-insert the rotated layer back into the matrix ---

        let layerIndex = 0;

        // 1. Top row: from (r_min, c_min) to (r_min, c_max)
        for (let j = c_min; j <= c_max; j++) {
            matrix[r_min][j] = rotatedLayer[layerIndex++];
        }

        // 2. Right column: from (r_min + 1, c_max) to (r_max, c_max)
        if (r_max > r_min) {
            for (let i = r_min + 1; i <= r_max; i++) {
                matrix[i][c_max] = rotatedLayer[layerIndex++];
            }
        }

        // 3. Bottom row: from (r_max, c_max - 1) down to (r_max, c_min)
        if (r_max > r_min && c_max > c_min) {
            for (let j = c_max - 1; j >= c_min; j--) {
                matrix[r_max][j] = rotatedLayer[layerIndex++];
            }
        }

        // 4. Left column: from (r_max - 1, c_min) down to (r_min + 1, c_min)
        if (r_max - 1 > r_min && c_max > c_min) {
            for (let i = r_max - 1; i > r_min; i--) {
                matrix[i][c_min] = rotatedLayer[layerIndex++];
            }
        }
    }

    // --- 4. Print the final matrix to standard output ---
    for (let i = 0; i < M; i++) {
        console.log(matrix[i].join(' '));
    }
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const m = parseInt(firstMultipleInput[0], 10);

    const n = parseInt(firstMultipleInput[1], 10);

    const r = parseInt(firstMultipleInput[2], 10);

    let matrix = Array(m);

    for (let i = 0; i < m; i++) {
        matrix[i] = readLine().replace(/\s+$/g, '').split(' ').map(matrixTemp => parseInt(matrixTemp, 10));
    }

    matrixRotation(matrix, r);
}
