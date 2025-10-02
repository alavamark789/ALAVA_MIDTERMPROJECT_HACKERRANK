
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const n = data[0];
const p = data.slice(1, n + 1);

const inv = new Array(n + 1);
for (let i = 0; i < n; i++) inv[p[i]] = i + 1;

const out = [];
for (let x = 1; x <= n; x++) out.push(inv[inv[x]]);

console.log(out.join('\n'));
