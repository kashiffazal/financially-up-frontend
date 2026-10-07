const fs = require('fs');

const xml = fs.readFileSync('agent-data/new-content/trust_temp/word/document.xml', 'utf8');

// Let's inspect paragraphs and tables in sequence
// In Word XML, body contains <w:p> and <w:tbl> elements in sequence.
const bodyMatch = xml.match(/<w:body>([\s\S]*?)<\/w:body>/);
if (!bodyMatch) {
  console.log('No body found');
  process.exit(1);
}

const body = bodyMatch[1];

// Match top level elements: either <w:p...>...</w:p> or <w:tbl...>...</w:tbl>
const elementRegex = /(<w:p[\s>][\s\S]*?<\/w:p>|<w:tbl[\s>][\s\S]*?<\/w:tbl>)/g;
const elements = [];
let match;
while ((match = elementRegex.exec(body)) !== null) {
  elements.push(match[1]);
}

console.log('Total elements in body:', elements.length);

function getParaText(pXml) {
  const matches = [...pXml.matchAll(/<w:t[^>]*>(.*?)<\/w:t>/g)];
  return matches.map(m => m[1]).join('')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .trim();
}

function parseTable(tblXml) {
  const rows = tblXml.split(/<\/w:tr>/);
  const tableData = [];
  for (const r of rows) {
    const cells = r.split(/<\/w:tc>/);
    const rowData = [];
    for (const c of cells) {
      const text = getParaText(c);
      if (text) rowData.push(text);
    }
    if (rowData.length > 0) {
      tableData.push(rowData);
    }
  }
  return tableData;
}

// Let's reconstruct the document stream
const docItems = [];
for (const el of elements) {
  if (el.startsWith('<w:p')) {
    const text = getParaText(el);
    if (text) {
      // Check if it's a heading
      const isHeading1 = el.includes('w:val="Heading1"');
      const isHeading2 = el.includes('w:val="Heading2"');
      const isHeading3 = el.includes('w:val="Heading3"');
      const isBullet = el.includes('<w:numPr>');
      docItems.push({ type: 'p', text, isHeading1, isHeading2, isHeading3, isBullet });
    }
  } else if (el.startsWith('<w:tbl')) {
    const tableData = parseTable(el);
    docItems.push({ type: 'tbl', tableData });
  }
}

console.log('Total parsed doc items:', docItems.length);

// Let's identify the pages!
// Each page typically starts with either a metadata table or a Page header
const pages = [];
let curPage = null;

for (let i = 0; i < docItems.length; i++) {
  const item = docItems[i];
  // Check if item is a metadata table (contains 'SEO Title' or 'Primary Keyword' or 'Target Keyword' or 'URL')
  const isMetaTable = item.type === 'tbl' && item.tableData.some(row => 
    row.some(cell => /seo title|primary keyword|target keyword|meta description/i.test(cell))
  );

  // Check if item is a page title like "Page 1 - ...", "Page 2 - ...", etc.
  const isPageHeading = item.type === 'p' && /^Page\s+\d+/i.test(item.text);

  if (isMetaTable || isPageHeading) {
    if (isMetaTable && curPage && curPage.items.length === 0) {
      // Just attach to curPage
      curPage.metaTable = item.tableData;
      curPage.items.push(item);
      continue;
    }
    
    // Save previous page if any
    if (curPage) {
      pages.push(curPage);
    }
    curPage = {
      id: pages.length + 1,
      header: isPageHeading ? item.text : '',
      metaTable: isMetaTable ? item.tableData : null,
      items: [item]
    };
  } else {
    if (!curPage) {
      curPage = { id: 1, header: 'Start', metaTable: null, items: [] };
    }
    curPage.items.push(item);
  }
}
if (curPage) pages.push(curPage);

console.log('Found structured pages:', pages.length);
pages.forEach(p => {
  console.log(`Page ${p.id}: Header="${p.header}", MetaRows=${p.metaTable ? p.metaTable.length : 0}, Items=${p.items.length}`);
});

fs.writeFileSync('agent-data/trust_all_pages.json', JSON.stringify(pages, null, 2));
