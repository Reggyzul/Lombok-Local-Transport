const fs = require('fs');

const html = fs.readFileSync('senaru_dump2.html', 'utf8');

function showNodeHtml(node) {
  const reg = new RegExp(`fl-node-${node}[\\s\\S]*?(?=<div class="fl-module fl-module-|<div class="fl-row|$)`, 'i');
  const m = html.match(reg);
  console.log(`\n============== NODE ${node} ==============`);
  console.log(m ? m[0].slice(0, 2000) : 'not found');
}

// Check review modules
showNodeHtml('217zoaqkdwep'); // Tripadvisor
showNodeHtml('82v6fldaixb5'); // Google
showNodeHtml('oxan5p6tbf38'); // CTA
