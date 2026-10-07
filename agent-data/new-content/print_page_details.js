const fs = require('fs');
const content = fs.readFileSync('financially-up-frontend/agent-data/new-content/bookkeeping_extracted.txt', 'utf8');
const pages = content.split(/\n(?=Page \d+)/);

for (let i = 1; i <= 8; i++) {
  const p = pages[i];
  const lines = p.split('\n').map(l => l.trim()).filter(Boolean);
  console.log('==============================================');
  console.log('PAGE ' + (i+1) + ': ' + lines[0]);
  console.log('==============================================');
  
  // Find URL, SEO Title, Meta Description, H1
  const urlIdx = lines.indexOf('URL');
  console.log('URL: ' + (urlIdx !== -1 ? lines[urlIdx + 1] : ''));
  const h1Idx = lines.indexOf('H1');
  console.log('H1: ' + (h1Idx !== -1 ? lines[h1Idx + 1] : ''));
  
  console.log('\n--- HEADINGS & STRUCTURE ---');
  let inFaq = false;
  lines.forEach((l, idx) => {
    if (l === 'Frequently Asked Questions') {
      inFaq = true;
      console.log('\n[SECTION] ' + l);
      return;
    }
    if (inFaq) {
      if (l.endsWith('?')) {
        console.log('  FAQ: ' + l);
      }
      return;
    }
    if (l.endsWith('?') || (l.length < 75 && !l.endsWith('.') && !l.endsWith(',') && idx > 12)) {
      console.log('[SECTION] ' + l);
    }
  });
}
