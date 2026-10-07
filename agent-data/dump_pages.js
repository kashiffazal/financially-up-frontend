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

// In Word XML, body contains <w:p> and <w:tbl> elements in sequence.
const bodyMatch = xml.match(/<w:body>([\s\S]*?)<\/w:body>/);
const body = bodyMatch[1];
const elementRegex = /(<w:p[\s>][\s\S]*?<\/w:p>|<w:tbl[\s>][\s\S]*?<\/w:tbl>)/g;
const elements = [];
let match;
while ((match = elementRegex.exec(body)) !== null) {
  elements.push(match[1]);
}

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

const docItems = [];
for (const el of elements) {
  if (el.startsWith('<w:p')) {
    const text = getParaText(el);
    if (text) {
      const isHeading1 = el.includes('w:val="Heading1"');
      const isHeading2 = el.includes('w:val="Heading2"');
      const isHeading3 = el.includes('w:val="Heading3"');
      const isBullet = el.includes('<w:numPr>') || text.startsWith('•') || text.startsWith('-');
      docItems.push({ type: 'p', text, isHeading1, isHeading2, isHeading3, isBullet });
    }
  } else if (el.startsWith('<w:tbl')) {
    const tableData = parseTable(el);
    docItems.push({ type: 'tbl', tableData });
  }
}

// Group into pages
const pages = [];
let curPage = null;

for (let i = 0; i < docItems.length; i++) {
  const item = docItems[i];
  const isMetaTable = item.type === 'tbl' && item.tableData.some(row => 
    row.some(cell => /seo title|primary keyword|target keyword|meta description/i.test(cell))
  );
  const isPageHeading = item.type === 'p' && /^Page\s+\d+/i.test(item.text);

  if (isMetaTable || isPageHeading) {
    if (isPageHeading) {
      // New page starting with Page X
      if (curPage) pages.push(curPage);
      curPage = {
        pageHeader: item.text,
        metaTable: null,
        items: []
      };
    } else if (isMetaTable) {
      if (!curPage || (curPage.metaTable && curPage.items.length > 0)) {
        if (curPage) pages.push(curPage);
        curPage = {
          pageHeader: '',
          metaTable: item.tableData,
          items: []
        };
      } else {
        curPage.metaTable = item.tableData;
      }
    }
  } else {
    if (!curPage) {
      curPage = { pageHeader: '', metaTable: null, items: [] };
    }
    curPage.items.push(item);
  }
}
if (curPage) pages.push(curPage);

// Format and save each page
const pagesExport = pages.map((p, idx) => {
  const meta = {};
  if (p.metaTable) {
    p.metaTable.forEach(row => {
      if (row.length >= 2) {
        meta[cleanText(row[0])] = cleanText(row[1]);
      }
    });
  }
  return {
    pageIndex: idx + 1,
    pageHeader: p.pageHeader,
    meta,
    content: p.items.map(it => ({
      type: it.isBullet ? 'bullet' : 'text',
      text: it.text
    }))
  };
});

fs.writeFileSync('agent-data/trust_all_pages_dump.json', JSON.stringify(pagesExport, null, 2));
console.log(`Saved ${pagesExport.length} pages to agent-data/trust_all_pages_dump.json`);
