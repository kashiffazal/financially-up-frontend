const fs = require('fs');

const xml = fs.readFileSync('agent-data/new-content/trust_temp/word/document.xml', 'utf8');

function cleanText(t) {
  return t
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

// Find all occurrences of URL or Page in tables
const tables = xml.split(/<\/w:tbl>/);
console.log('Total tables:', tables.length);

const parsedPages = [];

tables.forEach((tbl, idx) => {
  // Extract all text inside cells
  const rows = tbl.split(/<\/w:tr>/);
  let metadata = {};
  for (const r of rows) {
    const cells = r.split(/<\/w:tc>/);
    if (cells.length >= 2) {
      const getC = (c) => cleanText([...c.matchAll(/<w:t[^>]*>(.*?)<\/w:t>/g)].map(m => m[1]).join('').trim());
      const rawKey = getC(cells[0]);
      const rawVal = getC(cells[1]);
      
      // Clean up key
      const key = rawKey.replace(/.*?(Page \d+[^A-Za-z0-9]*)?/i, '').trim() || rawKey;
      if (rawKey.toLowerCase().includes('url')) metadata['url'] = rawVal;
      if (rawKey.toLowerCase().includes('seo title')) metadata['seoTitle'] = rawVal;
      if (rawKey.toLowerCase().includes('meta description')) metadata['metaDescription'] = rawVal;
      if (rawKey.toLowerCase().includes('h1')) metadata['h1'] = rawVal;
      if (rawKey.toLowerCase().includes('keyword')) metadata['keyword'] = rawVal;
      if (rawKey.toLowerCase().includes('page ')) metadata['pageHeader'] = rawKey.split(/[\r\n]/)[0].trim();
    }
  }

  // Also extract text after table until next table
  if (metadata.url || metadata.seoTitle || metadata.h1) {
    parsedPages.push({
      tableIndex: idx,
      metadata
    });
  }
});

console.log('Found pages count:', parsedPages.length);
parsedPages.forEach((p, i) => {
  console.log(`\n--- Page ${i + 1} ---`);
  console.log('Page Header:', p.metadata.pageHeader);
  console.log('URL:', p.metadata.url);
  console.log('Keyword:', p.metadata.keyword);
  console.log('H1:', p.metadata.h1);
  console.log('SEO Title:', p.metadata.seoTitle);
  console.log('Meta Desc:', p.metadata.metaDescription);
});
