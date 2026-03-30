const fs = require('fs');
const path = require('path');

const appDir = '/Users/omar/Work/test/src/app';
const compDir = '/Users/omar/Work/test/src/components';

if (!fs.existsSync(compDir)) fs.mkdirSync(compDir);

const files = [
  'page.tsx',
  'about/page.tsx',
  'services/page.tsx',
  'contact/page.tsx',
  'gallery/page.tsx',
  'service-detail/page.tsx'
];

let headerCode = '';
let footerCode = '';

for (const file of files) {
  const filePath = path.join(appDir, file);
  if (!fs.existsSync(filePath)) continue;
  let code = fs.readFileSync(filePath, 'utf8');

  if (file === 'page.tsx') {
    const navMatch = code.match(/<nav[^>]*>[\s\S]*?<\/nav>/i);
    if (navMatch) headerCode = navMatch[0];
    
    const footerMatch = code.match(/<footer[^>]*>[\s\S]*?<\/footer>/i);
    if (footerMatch) footerCode = footerMatch[0];
  }

  code = code.replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, '');
  code = code.replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, '');
  
  fs.writeFileSync(filePath, code);
}

headerCode = headerCode.replace(/<a([^>]*?)>\s*Services\s*<\/a>/gi, '<Link$1 href="/services">Services</Link>');
headerCode = headerCode.replace(/<a([^>]*?)>\s*About\s*<\/a>/gi, '<Link$1 href="/about">About</Link>');
headerCode = headerCode.replace(/<a([^>]*?)>\s*Gallery\s*<\/a>/gi, '<Link$1 href="/gallery">Gallery</Link>');
headerCode = headerCode.replace(/<a([^>]*?)>\s*Reviews\s*<\/a>/gi, '<Link$1 href="/#reviews">Reviews</Link>');
// Replace the brand logo name to point to home
headerCode = headerCode.replace(/<div className="text-2xl font-black tracking-tighter text-on-surface uppercase font-headline">\s*Magic Protection\s*<\/div>/g, '<Link href="/" className="text-2xl font-black tracking-tighter text-on-surface uppercase font-headline">Magic Protection</Link>');
headerCode = headerCode.replace(/href="#"/g, 'href="/"');

// Footer converting all A tags to Link
footerCode = footerCode.replace(/<a /g, '<Link ');
footerCode = footerCode.replace(/<\/a>/g, '</Link>');
footerCode = footerCode.replace(/href="#"/g, 'href="/"');

const headerFile = `import Link from 'next/link';\n\nexport default function Header() {\n  return (\n    ${headerCode}\n  );\n}\n`;
const footerFile = `import Link from 'next/link';\n\nexport default function Footer() {\n  return (\n    ${footerCode}\n  );\n}\n`;

fs.writeFileSync(path.join(compDir, 'Header.tsx'), headerFile);
fs.writeFileSync(path.join(compDir, 'Footer.tsx'), footerFile);

console.log('Layout components extracted and replaced.');
