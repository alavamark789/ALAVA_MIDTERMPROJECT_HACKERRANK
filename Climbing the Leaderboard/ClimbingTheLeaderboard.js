'use strict';

function climbingLeaderboard(ranked, player) {
    let uniqueRanked = [...new Set(ranked)];
    let results = [];
    let i = uniqueRanked.length - 1; 

    for (let score of player) {
        while (i >= 0 && score >= uniqueRanked[i]) {
            i--; 
        }
        results.push(i + 2);
    }
    return results;
}

function main() {
    const fs = require("fs");
    const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/).map(Number);
    let idx = 0;

    const n = input[idx++]; 
    const ranked = input.slice(idx, idx + n);
    idx += n;

    const m = input[idx++]; 
    const player = input.slice(idx, idx + m);

    const result = climbingLeaderboard(ranked, player);
    console.log(result.join("\n"));
}

main();
