const fs = require('fs');
const html = fs.readFileSync('senaru_dump2.html', 'utf8');

const reg = /fl-node-83m1dxwhz9vo[\s\S]*?(?=<div class="fl-module fl-module-pa1z3jh5r9u6)/i;
const m = html.match(reg);
if (m) {
  console.log('=== GALLERY MODULE ===');
  console.log(m[0].slice(0, 3000));
}
