const fs = require('fs');
const html = fs.readFileSync('senaru_dump2.html', 'utf8');

const contentMatch = html.match(/<div id="content"[^>]*>([\s\S]*?)<\/div>\s*<!-- #content -->/i) || html.match(/<main[^>]*>([\s\S]*?)<\/main>/i) || html.match(/<div id="content"[\s\S]*?<\/footer>/i);

if (contentMatch) {
  const content = contentMatch[0];
  console.log('Content total length:', content.length);
  // Find all Beaver Builder rows: fl-row or ux-builder sections
  const flRows = [...content.matchAll(/<(div|section)[^>]+class="([^"]*(?:fl-row|section|banner)[^"]*)"[^>]*>/gi)];
  console.log('Rows/Sections found:', flRows.length);
  flRows.forEach((r, i) => {
    console.log(`[${i+1}] Tag: <${r[1]}> Class: ${r[2].slice(0, 80)}`);
  });
}
