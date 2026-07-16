const fs = require('fs');
const path = require('path');

const dirs = fs.readdirSync('app/admin');
dirs.forEach(dir => {
  const pagePath = path.join('app/admin', dir, 'page.js');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Extract only the columns array block
    const columnsBlockRegex = /const columns = \[([\s\S]*?)\];/;
    const columnsMatch = content.match(columnsBlockRegex);
    if (!columnsMatch) return;
    const columnsBlock = columnsMatch[1];
    
    // Extract column titles from the columns block
    const columnTitles = [];
    const titleRegex = /title:\s*["']([^"']+)["']/g;
    let match;
    while ((match = titleRegex.exec(columnsBlock)) !== null) {
      const title = match[1];
      if (title !== 'Attachments' && title !== 'Status' && title !== 'Actions' && title !== 'Export') {
        columnTitles.push(title);
      }
    }
    
    if (columnTitles.length > 0) {
      // Remove duplicates
      const uniqueTitles = [...new Set(columnTitles)];
      
      const optionsArray = uniqueTitles.map(t => `{ value: "${t}", label: "${t}" }`);
      const optionsReplacement = 'options={[\n                  ' + optionsArray.join(',\n                  ') + ',\n                ]}';
      
      // We need to replace the options block.
      const optionsRegex = /options=\{\[[\s\S]*?\]\}/;
      content = content.replace(optionsRegex, optionsReplacement);
      
      // Update the useState initial value to the first column title
      const useStateRegex = /const \[filterBy, setFilterBy\] = useState\([^)]+\);/;
      content = content.replace(useStateRegex, `const [filterBy, setFilterBy] = useState("${uniqueTitles[0]}");`);
      
      fs.writeFileSync(pagePath, content, 'utf8');
      console.log(`Updated ${dir} with pure table columns: ${uniqueTitles.join(', ')}`);
    }
  }
});
console.log('All dropdowns synchronized strictly with table columns');
