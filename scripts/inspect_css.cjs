const fs = require('fs');

const css = fs.readFileSync('bb_75_layout.css', 'utf8');

console.log('CSS length:', css.length);

// Print background images
const bgMatches = [...css.matchAll(/background(?:-image)?:\s*url\(([^)]+)\)/gi)];
console.log('Background images:', bgMatches.map(m => m[1]));

// Print colors used
const hexColors = [...new Set(css.match(/#[0-9a-fA-F]{3,8}/g))];
console.log('Hex colors:', hexColors);

const rgbColors = [...new Set(css.match(/rgba?\([^)]+\)/g))];
console.log('RGB colors:', rgbColors);

// Search for key classes
['.fl-node-iw4sar7cnuxy', '.fl-button', 'table', '.fl-post-grid', 'h1', 'h2', 'h3'].forEach(term => {
  const rules = [...css.matchAll(new RegExp(`([^}{]+${term}[^}{]*\\{[^}]+\\})`, 'gi'))];
  console.log(`\n--- Rules for ${term} (count: ${rules.length}) ---`);
  rules.slice(0, 3).forEach(r => console.log(r[1].trim().replace(/\s+/g, ' ')));
});
