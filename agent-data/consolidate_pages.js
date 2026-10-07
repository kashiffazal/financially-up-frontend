const fs = require('fs');

const rawPages = JSON.parse(fs.readFileSync('agent-data/trust_all_pages.json', 'utf8'));

// If a page only has 1 item and it's a "Page X" heading, attach it to the next page
const realPages = [];
for (let i = 0; i < rawPages.length; i++) {
  const p = rawPages[i];
  if (p.items.length === 1 && /^Page\s+\d+/i.test(p.items[0].text)) {
    // Look ahead to next page
    if (i + 1 < rawPages.length) {
      rawPages[i + 1].header = p.items[0].text;
    }
    continue;
  }
  if (p.metaTable || p.items.length > 5) {
    realPages.push(p);
  }
}

console.log('Real Pages count:', realPages.length);

const pageDetails = realPages.map((p, idx) => {
  let meta = {};
  if (p.metaTable) {
    p.metaTable.forEach(row => {
      if (row.length >= 2) {
        meta[row[0].trim()] = row[1].trim();
      }
    });
  }

  // Get first H1 or title
  const h1Item = p.items.find(it => it.type === 'p' && (it.isHeading1 || it.text === meta['H1']));
  const headings = p.items.filter(it => it.type === 'p' && (it.isHeading1 || it.isHeading2 || it.isHeading3 || /^[A-Z][A-Za-z0-9\s?,—–-]{3,60}\??$/.test(it.text)));

  return {
    index: idx + 1,
    header: p.header,
    url: meta['URL'] || meta['url'] || '',
    keyword: meta['Target Keyword'] || meta['Primary Keyword'] || '',
    seoTitle: meta['SEO Title'] || '',
    metaDescription: meta['Meta Description'] || '',
    h1: meta['H1'] || (h1Item ? h1Item.text : ''),
    itemCount: p.items.length,
    headings: headings.map(h => h.text).slice(0, 10)
  };
});

console.log(JSON.stringify(pageDetails, null, 2));
fs.writeFileSync('agent-data/trust_real_pages_summary.json', JSON.stringify(pageDetails, null, 2));
