const fs = require('fs');
const content = fs.readFileSync('financially-up-frontend/agent-data/new-content/bookkeeping_extracted.txt', 'utf8');

const pages = content.split(/\n(?=Page \d+)/);
pages.forEach((p, idx) => {
  const lines = p.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  const title = lines[0];
  const urlIdx = lines.indexOf('URL');
  const url = urlIdx !== -1 ? lines[urlIdx + 1] : '';
  const kwIdx = lines.indexOf('Primary Keyword');
  const kw = kwIdx !== -1 ? lines[kwIdx + 1] : '';
  const seoIdx = lines.indexOf('SEO Title');
  const seoTitle = seoIdx !== -1 ? lines[seoIdx + 1] : '';
  const metaIdx = lines.indexOf('Meta Description');
  const metaDesc = metaIdx !== -1 ? lines[metaIdx + 1] : '';
  const h1Idx = lines.indexOf('H1');
  const h1 = h1Idx !== -1 ? lines[h1Idx + 1] : '';
  
  console.log('-----------------------------------------');
  console.log('Index:', idx + 1);
  console.log('Heading:', title);
  console.log('URL:', url);
  console.log('H1:', h1);
  console.log('Keyword:', kw);
  console.log('SEO Title:', seoTitle);
  console.log('Meta Desc:', metaDesc);
  console.log('Total lines:', lines.length);
});
