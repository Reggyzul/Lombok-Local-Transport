const fs = require('fs');
const html = fs.readFileSync('senaru_dump2.html', 'utf8');

// Find all fl-row top-level elements
const rows = [...html.matchAll(/<div class="fl-row [^"]*"[^>]*data-node="([^"]*)"/gi)];
console.log('Top level fl-rows count:', rows.length);
rows.forEach((r, idx) => {
  console.log(`Row #${idx+1}: data-node="${r[1]}" class="${r[0].match(/class="([^"]*)"/)[1]}"`);
});

// Let's also look for all rows with class containing 'fl-row ' or UX builder
// Print all headings and the row context they are in
const modules = [...html.matchAll(/<div[^>]+class="fl-module fl-module-[^"]*"[^>]*data-node="([^"]*)"/gi)];
console.log('\nModules count:', modules.length);
modules.forEach((m, idx) => {
  const modType = m[0].match(/class="([^"]*)"/)[1];
  console.log(`Mod #${idx+1}: ${modType}`);
});

// Let's also check if there are UX Builder sections (Flatsome sections)
const flatSections = [...html.matchAll(/<section class="section[^"]*"[^>]*id="([^"]*)"/gi)];
console.log('\nFlatsome sections count:', flatSections.length);
flatSections.forEach((s, idx) => {
  console.log(`Section #${idx+1}: id="${s[1]}"`);
});
