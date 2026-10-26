const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\UsEr\\.gemini\\antigravity-ide\\brain\\11d94179-de72-4923-ab5e-94a306c30197\\.system_generated\\steps\\141\\content.md', 'utf8');

const mainIdx = content.indexOf('<main id="main"');
const endMainIdx = content.indexOf('</main>');
const mainSnippet = content.slice(mainIdx, endMainIdx);

const headings = [...mainSnippet.matchAll(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi)].map(h => `${h[1]}: ${h[2].replace(/<[^>]+>/g, '').trim()}`);
console.log('=== CONTACT HEADINGS ===');
console.log(headings);

const paragraphs = [...mainSnippet.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map(p => p[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()).filter(Boolean);
console.log('\n=== CONTACT PARAGRAPHS ===');
paragraphs.forEach((p, i) => console.log(`${i+1}. ${p.slice(0, 150)}...`));
