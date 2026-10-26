const fs = require('fs');

const html = fs.readFileSync('senaru_dump2.html', 'utf8');

function getModule(node) {
  const reg = new RegExp(`<div[^>]+fl-node-${node}[^"]*"[\\s\\S]*?(?=<div class="fl-module fl-module-|<div class="fl-row|$)`, 'i');
  const m = html.match(reg);
  return m ? m[0] : 'not found';
}

console.log('--- MOD 1: ov3g69amqixh ---');
console.log(getModule('ov3g69amqixh'));

console.log('\n--- MOD 2: i4sujat5lynb ---');
console.log(getModule('i4sujat5lynb'));

console.log('\n--- MOD 3: 92zjkt3lur47 ---');
console.log(getModule('92zjkt3lur47'));

console.log('\n--- MOD 4: dbnysz7pm3ec ---');
console.log(getModule('dbnysz7pm3ec'));

console.log('\n--- MOD 5: w7robv4apcxf ---');
console.log(getModule('w7robv4apcxf'));

console.log('\n--- MOD 6: 3yw7o8c01jsl ---');
console.log(getModule('3yw7o8c01jsl'));
