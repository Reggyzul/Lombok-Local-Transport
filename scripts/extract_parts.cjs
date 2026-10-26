const fs = require('fs');

const html = fs.readFileSync('senaru_dump2.html', 'utf8');

function extractSnippet(id, len = 1000) {
  const regex = new RegExp(`id=["']${id}["'][\\s\\S]*?`, 'i');
  const match = html.match(regex);
  if (match) {
    console.log(`\n================== ID: ${id} ==================`);
    console.log(match[0].slice(0, len));
  }
}

// 1. Top bar & Masthead
extractSnippet('top-bar', 1200);
extractSnippet('masthead', 2000);

// Let's also look for menu links in the entire header
const headerMatch = html.match(/<header[\s\S]*?<\/header>/i) || html.match(/<div[^>]*id=["']masthead["'][\s\S]*?<\/header>/i);
if (headerMatch) {
  console.log('\n================== HEADER HTML ==================');
  console.log(headerMatch[0].slice(0, 2500));
}

// Look for menu
const menuMatches = [...html.matchAll(/<ul[^>]+class=["'][^"']*menu[^"']*["'][\s\S]*?<\/ul>/gi)];
console.log('\n================== MENUS FOUND ==================', menuMatches.length);
menuMatches.forEach((m, idx) => {
  console.log(`\nMenu #${idx+1}:`);
  const items = [...m[0].matchAll(/<li[^>]*>[\s\S]*?<a[^>]+href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi)];
  items.forEach(it => {
    console.log(` - ${it[2].replace(/<[^>]+>/g, '').trim()} (${it[1]})`);
  });
});

// Let's check footer
const footerMatch = html.match(/<footer[\s\S]*?<\/footer>/i);
if (footerMatch) {
  console.log('\n================== FOOTER HTML ==================');
  console.log(footerMatch[0].slice(0, 3000));
}
