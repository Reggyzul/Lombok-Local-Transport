const fs = require('fs');

const html = fs.readFileSync('senaru_dump2.html', 'utf8');

// Find all fl-module elements
const regex = /<div class="fl-module fl-module-([a-zA-Z0-9_-]+)[^"]* fl-node-([a-zA-Z0-9_-]+)"[^>]*>([\s\S]*?)(?=<div class="fl-module fl-module-|$)/g;

let match;
let i = 1;
while ((match = regex.exec(html)) !== null) {
  const type = match[1];
  const node = match[2];
  const inner = match[3];

  const headings = [...inner.matchAll(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi)].map(h => `${h[1]}: ${h[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ')}`);
  const imgs = [...inner.matchAll(/<img[^>]+src=["']([^"']*)["'][^>]*>/gi)].map(m => m[1]);
  const btns = [...inner.matchAll(/<a[^>]+class=["'][^"']*(?:fl-button|button)[^"']*["'][^>]*>([\s\S]*?)<\/a>/gi)].map(b => b[1].replace(/<[^>]+>/g, '').trim());

  console.log(`\n[MODULE ${i++}] Type: ${type} | Node: ${node}`);
  if (headings.length) console.log('  Headings:', headings);
  if (imgs.length) console.log('  Images:', imgs);
  if (btns.length) console.log('  Buttons:', btns);
  
  // Clean text sample
  const text = inner.replace(/<style[\s\S]*?<\/style>/gi, '')
                    .replace(/<script[\s\S]*?<\/script>/gi, '')
                    .replace(/<[^>]+>/g, ' ')
                    .replace(/\s+/g, ' ')
                    .trim();
  console.log('  Text:', text.slice(0, 180));
}
