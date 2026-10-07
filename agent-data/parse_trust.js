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

// Split into tables
const tables = xml.split(/<\/w:tbl>/);
console.log('Total tables found:', tables.length);

const pages = [];
tables.forEach((tbl, idx) => {
  const rows = tbl.split(/<\/w:tr>/);
  let metadata = {};
  for (const r of rows) {
    const cells = r.split(/<\/w:tc>/);
    if (cells.length >= 2) {
      const getC = (c) => [...c.matchAll(/<w:t[^>]*>(.*?)<\/w:t>/g)].map(m => m[1]).join('').trim();
      const key = getC(cells[0]);
      const val = getC(cells[1]);
      if (key && val) {
        metadata[key] = cleanText(val);
      }
    }
  }
  if (Object.keys(metadata).length > 0) {
    pages.push({ index: idx, metadata });
  }
});

console.log(JSON.stringify(pages, null, 2));
