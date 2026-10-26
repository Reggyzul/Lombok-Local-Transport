const fs = require('fs');
const html = fs.readFileSync('senaru_payment.html', 'utf8');

const mainIdx = html.indexOf('<main id="main"');
const endMainIdx = html.indexOf('</main>');
const mainSnippet = html.slice(mainIdx, endMainIdx);

const headings = [...mainSnippet.matchAll(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi)].map(h => `${h[1]}: ${h[2].replace(/<[^>]+>/g, '').trim()}`);
console.log('=== PAYMENT HEADINGS ===');
console.log(headings);

const paragraphs = [...mainSnippet.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map(p => p[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()).filter(Boolean);
console.log('\n=== PAYMENT PARAGRAPHS ===');
paragraphs.forEach((p, i) => console.log(`${i+1}. ${p.slice(0, 150)}...`));
