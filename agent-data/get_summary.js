const fs = require('fs');

const xml = fs.readFileSync('agent-data/new-content/trust_temp/word/document.xml', 'utf8');

function cleanText(t) {
  return t
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

// Split into tables
const tables = xml.split(/<\/w:tbl>/);

const pages = [];

tables.forEach((tbl, idx) => {
  const rows = tbl.split(/<\/w:tr>/);
  let metadata = {};
  for (const r of rows) {
    const cells = r.split(/<\/w:tc>/);
    if (cells.length >= 2) {
      const key = cleanText(cells[0]);
      const val = cleanText(cells[1]);
      if (key && val) {
        metadata[key] = val;
      }
    }
  }

  // Check if this metadata looks like a page metadata table
  const hasMeta = Object.keys(metadata).some(k => 
    k.toLowerCase().includes('seo title') || 
    k.toLowerCase().includes('primary keyword') || 
    k.toLowerCase().includes('target keyword') ||
    k.toLowerCase().includes('url')
  );

  if (hasMeta) {
    pages.push({
      tableIndex: idx,
      metadata
    });
  }
});

console.log(`Found ${pages.length} pages:`);
const summary = pages.map((p, i) => {
  let url = '';
  let h1 = '';
  let kw = '';
  let seoTitle = '';
  let pageName = '';

  for (const [k, v] of Object.entries(p.metadata)) {
    if (k.toLowerCase().includes('url')) url = v;
    if (k.toLowerCase().includes('h1')) h1 = v;
    if (k.toLowerCase().includes('keyword')) kw = v;
    if (k.toLowerCase().includes('seo title')) seoTitle = v;
    if (k.toLowerCase().includes('page ')) pageName = k;
  }

  return {
    pageNumber: i + 1,
    pageName,
    url,
    h1,
    kw,
    seoTitle
  };
});

console.table(summary);
fs.writeFileSync('agent-data/trust_pages_summary.json', JSON.stringify(summary, null, 2));
