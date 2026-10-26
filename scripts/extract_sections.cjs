const fs = require('fs');
const html = fs.readFileSync('senaru_dump2.html', 'utf8');

// Let's print out the full masthead
const masthead = html.match(/<div id="masthead"[\s\S]*?<\/header>/i);
if (masthead) {
  console.log('=== FULL MASTHEAD ===');
  console.log(masthead[0]);
}

// Let's print out the bottom footer copyright
const absFooter = html.match(/<div class="absolute-footer[\s\S]*?<\/footer>/i);
if (absFooter) {
  console.log('=== ABSOLUTE FOOTER ===');
  console.log(absFooter[0]);
}

// Let's list all sections in order
const bodyContent = html.match(/<main id="main"[\s\S]*?<\/main>/i) || html.match(/<div id="content"[\s\S]*?<\/footer>/i);
if (bodyContent) {
  console.log('=== MAIN SECTIONS ===');
  const sections = [...bodyContent[0].matchAll(/<section[^>]*id="([^"]*)"[^>]*class="([^"]*)"/gi)];
  sections.forEach((s, i) => console.log(`Section ${i+1}: id="${s[1]}" class="${s[2]}"`));
}
