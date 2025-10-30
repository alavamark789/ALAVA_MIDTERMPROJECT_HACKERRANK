'use strict';

function maximumPeople(p, x, y, r) {
    const n = p.length;
    const m = y.length;

    // Step 1: Track how many clouds cover each town
    const covered = Array(n).fill(0);
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (x[i] >= y[j] - r[j] && x[i] <= y[j] + r[j]) {
                covered[i]++;
            }
        }
    }

    // Step 2: Count population of towns already sunny
    let sunnyPop = 0;
    for (let i = 0; i < n; i++) {
        if (covered[i] === 0) sunnyPop += p[i];
    }

    // Step 3: Track additional population that could become sunny if we remove a cloud
    const cloudGain = Array(m).fill(0);
    for (let i = 0; i < n; i++) {
        if (covered[i] === 1) {
            for (let j = 0; j < m; j++) {
                if (x[i] >= y[j] - r[j] && x[i] <= y[j] + r[j]) {
                    cloudGain[j] += p[i];
                }
            }
        }
    }

    // Step 4: Add the max additional sunny population from removing a single cloud
    const maxGain = cloudGain.length > 0 ? Math.max(...cloudGain) : 0;

    return sunnyPop + maxGain;
}

// Example usage:
const p = [10, 100];
const x = [5, 100];
const y = [4];
const r = [1];
console.log(maximumPeople(p, x, y, r)); // Output: 110
