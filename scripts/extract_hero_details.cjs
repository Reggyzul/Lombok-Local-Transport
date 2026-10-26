const fs = require('fs');

const html = fs.readFileSync('senaru_dump2.html', 'utf8');

// Find row 1 (hero row)
const row1Match = html.match(/class="[^"]*fl-node-iw4sar7cnuxy[^"]*"[\s\S]*?(?=<div class="fl-row[^"]*fl-node-26zl543gqe8o)/i);
if (row1Match) {
  console.log('=== HERO ROW RAW ===');
  console.log(row1Match[0].slice(0, 3000));
}

// Check scripts for slideshow settings
const scriptSlides = [...html.matchAll(/fl-node-iw4sar7cnuxy[\s\S]*?<\/script>/gi)];
console.log('Script matches for hero:', scriptSlides.length);
scriptSlides.forEach(s => console.log(s[0]));
