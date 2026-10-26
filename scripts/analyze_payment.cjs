const fs = require('fs');

const html = fs.readFileSync('senaru_payment.html', 'utf8');

const headings = [...html.matchAll(/<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/gi)].map(h => `${h[1]}: ${h[2].replace(/<[^>]+>/g, '').trim()}`);
console.log('Payment Headings:', headings);

// Find main content
const main = html.match(/<main id="main"[^>]*>([\s\S]*?)<\/main>/i);
if (main) {
  const text = main[0].replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  console.log('Payment Text:', text.slice(0, 1000));
}
