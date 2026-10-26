const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\UsEr\\.gemini\\antigravity-ide\\brain\\11d94179-de72-4923-ab5e-94a306c30197\\.system_generated\\steps\\129\\content.md', 'utf8');

const headings = [...content.matchAll(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi)].map(h => `${h[1]}: ${h[2].replace(/<[^>]+>/g, '').trim()}`);
console.log('=== POPULAR ROUTES HEADINGS ===');
console.log(headings);

// Check tables
const tables = [...content.matchAll(/<table[^>]*>([\s\S]*?)<\/table>/gi)];
console.log('\n=== TABLES COUNT:', tables.length);
tables.forEach((t, i) => {
  const rows = [...t[1].matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)].map(r => {
    return [...r[1].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi)].map(c => c[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()).join(' | ');
  });
  console.log(`\nTable ${i+1}:`);
  rows.slice(0, 10).forEach(r => console.log('  ', r));
});
