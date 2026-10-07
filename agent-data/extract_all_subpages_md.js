const fs = require('fs');

const pages = JSON.parse(fs.readFileSync('agent-data/trust_all_pages_dump.json', 'utf8'));

// Generate a clean breakdown of pages 2 to 11
let md = '# Trust Services Subpages (Pages 2 - 11)\n\n';

for (let i = 1; i < pages.length; i++) {
  const p = pages[i];
  const pageNum = i + 1;
  const meta = p.meta;
  const url = meta['URL'] || meta['url'] || '';
  const kw = meta['Primary Keyword'] || meta['Target Keyword'] || '';
  const seoTitle = meta['SEO Title'] || '';
  const metaDesc = meta['Meta Description'] || '';
  const h1 = meta['H1'] || '';

  md += `## Subpage ${i}: ${h1} (Page ${pageNum} in Doc)\n\n`;
  md += `- **Route / URL**: \`${url}\`\n`;
  md += `- **Primary Keyword**: \`${kw}\`\n`;
  md += `- **SEO Title**: \`${seoTitle}\`\n`;
  md += `- **Meta Description**: \`${metaDesc}\`\n`;
  md += `- **H1**: \`${h1}\`\n\n`;
  md += `### Content Items:\n\n`;

  p.content.forEach((it, idx) => {
    if (!it.text) return;
    const txt = it.text.trim();
    if (!txt) return;
    if (it.type === 'bullet' || txt.startsWith('•') || txt.startsWith('-')) {
      md += `* ${txt.replace(/^[•\-]\s*/, '')}\n`;
    } else {
      md += `\n${txt}\n`;
    }
  });

  md += '\n\n---\n\n';
}

fs.writeFileSync('agent-data/all_10_subpages_extracted.md', md);
console.log('Successfully wrote agent-data/all_10_subpages_extracted.md');
