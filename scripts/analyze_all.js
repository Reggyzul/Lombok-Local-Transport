const fs = require('fs');

const html = fs.readFileSync('senaru_dump2.html', 'utf8');

// Find all fl-row
const rowRegex = /<div class="fl-row\s+([^"]*)"[^>]*data-node="([^"]*)"/g;
let m;
console.log('=== ROWS IN SENARU HOMEPAGE ===');
let count = 0;
while ((m = rowRegex.exec(html)) !== null) {
  count++;
  console.log(`Row ${count}: node=${m[2]} classes=${m[1]}`);
}

// Find modules inside
const modRegex = /<div[^>]+class="fl-module fl-module-([a-zA-Z0-9_-]+)[^"]*"[^>]*data-node="([^"]*)"/g;
let mods = [];
while ((m = modRegex.exec(html)) !== null) {
  mods.push({ type: m[1], node: m[2], index: m.index });
}

console.log(`\n=== TOTAL MODULES: ${mods.length} ===`);
mods.forEach((mod, idx) => {
  const nextIdx = idx < mods.length - 1 ? mods[idx+1].index : html.indexOf('</main>');
  const snippet = html.slice(mod.index, nextIdx > mod.index ? nextIdx : mod.index + 2000);
  
  // headings
  const headings = [...snippet.matchAll(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi)].map(h => `${h[1]}: ${h[2].replace(/<[^>]+>/g, '').trim()}`);
  const imgs = [...snippet.matchAll(/<img[^>]+src=["']([^"']*)["'][^>]*>/gi)].map(i => i[1]);
  const btns = [...snippet.matchAll(/<a[^>]+class=["'][^"']*(?:fl-button|button)[^"']*["'][^>]*>([\s\S]*?)<\/a>/gi)].map(b => b[1].replace(/<[^>]+>/g, '').trim());
  const text = snippet.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 150);

  console.log(`Mod ${idx+1} [${mod.type}] node=${mod.node}:`);
  if (headings.length) console.log(`   Headings: ${headings.join(' | ')}`);
  if (imgs.length) console.log(`   Images: ${imgs.slice(0, 2).join(', ')}`);
  if (btns.length) console.log(`   Buttons: ${btns.join(', ')}`);
  console.log(`   Text: ${text.slice(0, 100)}...`);
});
