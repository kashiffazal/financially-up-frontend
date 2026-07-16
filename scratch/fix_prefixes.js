const fs = require('fs');
const path = require('path');

const dirs = fs.readdirSync('app/admin');
dirs.forEach(dir => {
  const pagePath = path.join('app/admin', dir, 'page.js');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    // Replace the exact broken string
    const brokenString = 'filenamePrefix={$folderName-';
    const fixedString = 'filenamePrefix={`' + dir + '-';
    content = content.replace(brokenString, fixedString);
    fs.writeFileSync(pagePath, content, 'utf8');
  }
});
console.log('Fixed syntax errors');
