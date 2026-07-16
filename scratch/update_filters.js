const fs = require('fs');
const path = require('path');

const filters = {
  'individual-engagement': [
    '{ value: "Name", label: "Name" }',
    '{ value: "Email", label: "Email" }',
    '{ value: "Phone", label: "Phone" }',
    '{ value: "Occupation", label: "Occupation" }',
    '{ value: "Visa Status", label: "Visa Status" }',
  ],
  'apply-tfn-abns': [
    '{ value: "Name", label: "Name / Company" }',
    '{ value: "Email", label: "Email" }',
    '{ value: "Phone", label: "Phone" }',
  ],
  'gst-registrations': [
    '{ value: "Company Name", label: "Company Name" }',
    '{ value: "Email", label: "Email" }',
    '{ value: "Phone", label: "Phone" }',
  ],
  'business-name-registrations': [
    '{ value: "Business Name", label: "Business Name" }',
    '{ value: "Email", label: "Email" }',
    '{ value: "Phone", label: "Phone" }',
  ],
  'medicare': [
    '{ value: "First Name", label: "First Name" }',
    '{ value: "Last Name", label: "Last Name" }',
    '{ value: "Email", label: "Email" }',
    '{ value: "Phone", label: "Phone" }',
    '{ value: "Medicare No", label: "Medicare No" }',
  ],
  'trust-registrations': [
    '{ value: "Trust Name", label: "Trust Name" }',
    '{ value: "Email", label: "Email" }',
    '{ value: "Phone", label: "Phone" }',
  ],
  'entity-engagements': [
    '{ value: "Entity Name", label: "Entity Name" }',
    '{ value: "Email", label: "Email" }',
    '{ value: "Phone", label: "Phone" }',
  ],
  'changes-to-company-details': [
    '{ value: "Company Name", label: "Company Name" }',
    '{ value: "Email", label: "Email" }',
    '{ value: "Phone", label: "Phone" }',
  ],
  'smsf-registrations': [
    '{ value: "SMSF Name", label: "SMSF Name" }',
    '{ value: "Email", label: "Email" }',
    '{ value: "Phone", label: "Phone" }',
  ],
  'company-registration': [
    '{ value: "Company Name", label: "Company Name" }',
    '{ value: "Contact Name", label: "Contact Name" }',
    '{ value: "Email", label: "Email" }',
    '{ value: "Phone", label: "Phone" }',
  ],
};

const dirs = fs.readdirSync('app/admin');
dirs.forEach(dir => {
  const pagePath = path.join('app/admin', dir, 'page.js');
  if (fs.existsSync(pagePath) && filters[dir]) {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Replace the options array block
    const optionsReplacement = 'options={[\n                  ' + filters[dir].join(',\n                  ') + ',\n                ]}';
    
    // We can use a regex to match the options={[ ... ]} block
    content = content.replace(/options=\{\[\s*\{ value: "Name"[^\]]+\]\}/, optionsReplacement);
    
    fs.writeFileSync(pagePath, content, 'utf8');
  }
});
console.log('Filters updated');
