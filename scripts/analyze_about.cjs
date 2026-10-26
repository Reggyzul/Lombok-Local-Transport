const fs = require('fs');

const html = fs.readFileSync('senaru_about.html', 'utf8');
const title = html.match(/<title>([^<]+)<\/title>/i);
console.log('Title:', title ? title[1] : 'none');

const pageTitle = html.match(/<div class="page-title[^"]*"[\s\S]*?<\/div>\s*<\/div>/i);
console.log('Page Title Banner:', pageTitle ? pageTitle[0] : 'none');

const headings = [...html.matchAll(/<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/gi)].map(h => `${h[1]}: ${h[2].replace(/<[^>]+>/g, '').trim()}`);
console.log('Headings:', headings);

// Find content main
const mainContent = html.match(/<main id="main"[^>]*>([\s\S]*?)<\/main>/i);
if (mainContent) {
  console.log('Main snippet:', mainContent[0].replace(/<style[\s\S]*?<\/style>/gi, '').slice(0, 1500));
}
