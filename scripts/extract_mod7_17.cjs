const fs = require('fs');

const html = fs.readFileSync('senaru_dump2.html', 'utf8');

function getModule(node) {
  const reg = new RegExp(`<div[^>]+fl-node-${node}[^"]*"[\\s\\S]*?(?=<div class="fl-module fl-module-|<div class="fl-row|$)`, 'i');
  const m = html.match(reg);
  return m ? m[0] : 'not found';
}

['0rpgvfmuaq54', '217zoaqkdwep', '82v6fldaixb5', '83m1dxwhz9vo', 'pa1z3jh5r9u6', '5j4blpxk8hsn', 'reyb7z8j6g90', 'bi5ty8xfrzuq', 'xqycnr1dpv8l'].forEach(node => {
  console.log(`\n================= NODE: ${node} =================`);
  console.log(getModule(node));
});
