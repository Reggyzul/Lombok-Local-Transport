const fs = require('fs');

const content = fs.readFileSync('modules_output.txt', 'utf8');
const sections = content.split('======================= MODULE ');

sections.slice(1).forEach((sec) => {
  const lines = sec.split('\n');
  const header = lines[0];
  console.log('--- ' + header + ' ---');
  // find headings, images, buttons, texts
  const htmlSnippet = sec;
  const headings = [...htmlSnippet.matchAll(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi)].map(h => `${h[1]}: ${h[2].replace(/<[^>]+>/g, '').trim()}`);
  if (headings.length) console.log('  Headings:', headings);
  
  const imgs = [...htmlSnippet.matchAll(/<img[^>]+src=["']([^"']*)["'][^>]*>/gi)].map(m => m[1]);
  if (imgs.length) console.log('  Images:', imgs.slice(0, 3));

  const buttons = [...htmlSnippet.matchAll(/<a[^>]+class=["'][^"']*(?:fl-button|button)[^"']*["'][^>]*>([\s\S]*?)<\/a>/gi)].map(b => b[1].replace(/<[^>]+>/g, '').trim());
  if (buttons.length) console.log('  Buttons:', buttons);

  // Print first 200 text chars
  const plainText = htmlSnippet.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 200);
  console.log('  Text preview:', plainText);
});
