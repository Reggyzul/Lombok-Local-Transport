const fs = require('fs');
const html = fs.readFileSync('senaru_dump2.html', 'utf8');

// Find all modules and print their content
const modules = [...html.matchAll(/<div[^>]+class="fl-module fl-module-([^"]*)"[^>]*data-node="([^"]*)"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/gi)];

const modRegex = /<div[^>]+class="fl-module fl-module-([a-zA-Z0-9_-]+)[^"]*"[^>]*data-node="([^"]*)"/g;
let match;
const moduleIndices = [];
while ((match = modRegex.exec(html)) !== null) {
  moduleIndices.push({ type: match[1], node: match[2], index: match.index });
}

console.log('Total modules found:', moduleIndices.length);

moduleIndices.forEach((m, i) => {
  const nextIdx = i < moduleIndices.length - 1 ? moduleIndices[i+1].index : html.indexOf('</main>');
  const snippet = html.slice(m.index, nextIdx > m.index ? nextIdx : m.index + 2000);
  console.log(`\n======================= MODULE ${i+1}: ${m.type} (node: ${m.node}) =======================`);
  // Clean snippet to see text content and structure
  console.log(snippet.slice(0, 1500));
});
