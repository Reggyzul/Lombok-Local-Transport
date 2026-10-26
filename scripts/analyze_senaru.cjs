const fs = require('fs');

const html = fs.readFileSync('senaru_dump2.html', 'utf8');
console.log('--- PAGE INFO ---');
const title = html.match(/<title>([^<]+)<\/title>/i);
console.log('Title:', title ? title[1] : 'None');

const styles = [...html.matchAll(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi)].map(m => m[0]);
console.log('Stylesheets:', styles.slice(0, 5));

console.log('--- HEADINGS ---');
const headings = [...html.matchAll(/<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/gi)];
headings.forEach(h => {
  const clean = h[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  if (clean) console.log(`${h[1]}: ${clean}`);
});

console.log('--- NAV ITEMS ---');
const nav = html.match(/<nav[\s\S]*?<\/nav>/i);
if (nav) {
  const links = [...nav[0].matchAll(/<a[^>]+href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi)];
  links.forEach(l => {
    const txt = l[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
    if (txt) console.log(`Nav Link: [${txt}] -> ${l[1]}`);
  });
}

console.log('--- SECTIONS & IDS ---');
const sections = [...html.matchAll(/<(section|div)[^>]+id=["']([^"']+)["'][^>]*>/gi)];
sections.slice(0, 30).forEach(s => {
  console.log(`Tag: ${s[1]} id="${s[2]}"`);
});
