const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// docx is a zip file. Let's extract word/document.xml
const docxPath = path.resolve('financially-up-frontend/agent-data/new-content/4th Pillar Bookkeeping.docx');
const tempDir = path.resolve('financially-up-frontend/agent-data/new-content/temp_docx');

if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

// Copy docx to .zip first
const zipPath = path.resolve('financially-up-frontend/agent-data/new-content/temp_doc.zip');
fs.copyFileSync(docxPath, zipPath);

const psCommand = `powershell -Command "Expand-Archive -LiteralPath '${zipPath}' -DestinationPath '${tempDir}' -Force"`;
execSync(psCommand, { stdio: 'inherit' });

const docXmlPath = path.join(tempDir, 'word', 'document.xml');
if (fs.existsSync(docXmlPath)) {
  const xml = fs.readFileSync(docXmlPath, 'utf8');
  // Simple extraction of w:p and w:t
  // Match paragraphs
  const pRegex = /<w:p(?:\s+[^>]*)?>([\s\S]*?)<\/w:p>/g;
  const tRegex = /<w:t(?:\s+[^>]*)?>([\s\S]*?)<\/w:t>/g;
  
  let match;
  const paragraphs = [];
  while ((match = pRegex.exec(xml)) !== null) {
    const pContent = match[1];
    let pText = '';
    let tMatch;
    while ((tMatch = tRegex.exec(pContent)) !== null) {
      pText += tMatch[1];
    }
    if (pText.trim()) {
      paragraphs.push(pText.trim());
    }
  }

  const outPath = path.resolve('financially-up-frontend/agent-data/new-content/bookkeeping_extracted.txt');
  fs.writeFileSync(outPath, paragraphs.join('\n\n'), 'utf8');
  console.log(`Extracted ${paragraphs.length} paragraphs to ${outPath}`);
} else {
  console.error('document.xml not found!');
}
