const fs = require('fs');
const content = fs.readFileSync('financially-up-frontend/agent-data/new-content/bookkeeping_extracted.txt', 'utf8');

const pages = content.split(/\n(?=Page \d+)/);

pages.forEach((p, idx) => {
  if (idx === 0) return; // skip main page (Page 1)
  const lines = p.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  console.log(`\n======================================================`);
  console.log(`PAGE ${idx + 1}: ${lines[0]}`);
  console.log(`======================================================`);
  
  // Find key sections
  let inFaq = false;
  let faqs = [];
  let sections = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('Frequently Asked Questions')) {
      inFaq = true;
      continue;
    }
    if (line.includes('Related services') || line.includes('Related Services')) {
      inFaq = false;
      continue;
    }
    if (inFaq) {
      if (line.endsWith('?')) {
        faqs.push({ q: line, a: lines[i+1] || '' });
      }
    } else {
      // Look for headings
      if (line.length < 90 && (line.endsWith('?') || (!line.endsWith('.') && line.length < 70))) {
        sections.push(line);
      }
    }
  }
  
  console.log('Sections/Headings found:');
  sections.slice(0, 15).forEach(s => console.log('  - ' + s));
  console.log(`FAQs found (${faqs.length}):`);
  faqs.forEach(f => console.log('  Q: ' + f.q));
});
