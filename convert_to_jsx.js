const fs = require('fs');
const path = require('path');

const screensDir = '/tmp/screens';
const appDir = '/Users/omar/Work/test/src/app';

const routes = {
    'homepage.html': 'page.tsx',
    'about_our_precision.html': 'about/page.tsx',
    'services_overview.html': 'services/page.tsx',
    'book___contact.html': 'contact/page.tsx',
    'gallery_showcase.html': 'gallery/page.tsx',
    'service_detail_template.html': 'service-detail/page.tsx',
};

function convertHtmlToJsx(html) {
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    if (!bodyMatch) return '';
    let body = bodyMatch[1];
    
    body = body.replace(/class=/g, 'className=');
    body = body.replace(/for=/g, 'htmlFor=');
    body = body.replace(/tabindex=/g, 'tabIndex=');
    body = body.replace(/viewbox=/g, 'viewBox=');
    
    // Numeric attributes for React
    body = body.replace(/rows="([0-9]+)"/g, 'rows={$1}');
    body = body.replace(/tabIndex="([0-9\-]+)"/g, 'tabIndex={$1}');
    
    // Handle unclosed tags
    body = body.replace(/<img([^>]*)>/g, (match, attrs) => {
        if(attrs.endsWith('/')) return `<img${attrs}>`;
        return `<img${attrs}/>`;
    });
    body = body.replace(/<input([^>]*)>/g, (match, attrs) => {
        if(attrs.endsWith('/')) return `<input${attrs}>`;
        return `<input${attrs}/>`;
    });
    body = body.replace(/<br([^>]*)>/g, (match, attrs) => {
        if(attrs.endsWith('/')) return `<br${attrs}>`;
        return `<br${attrs}/>`;
    });
    body = body.replace(/<hr([^>]*)>/g, (match, attrs) => {
        if(attrs.endsWith('/')) return `<hr${attrs}>`;
        return `<hr${attrs}/>`;
    });
    
    // Handle styles
    body = body.replace(/style="([^"]*)"/g, (match, styleString) => {
        const styles = styleString.split(';').filter(s => s.trim().length > 0);
        let objStr = '{';
        styles.forEach(s => {
            let [key, ...valParts] = s.split(':');
            if(!key) return;
            let val = valParts.join(':').trim();
            let camelKey = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            if(camelKey.startsWith('ms')) {
                camelKey = 'ms' + camelKey.slice(2);
            }
            if(val) {
                val = val.replace(/'/g, "\\'");
                objStr += `${camelKey}: '${val}', `;
            }
        });
        objStr += '}';
        return `style={${objStr}}`;
    });
    
    // SVG and common react naming mismatches
    body = body.replace(/fill-rule/g, 'fillRule');
    body = body.replace(/clip-rule/g, 'clipRule');
    body = body.replace(/stroke-width/g, 'strokeWidth');
    body = body.replace(/stroke-linecap/g, 'strokeLinecap');
    body = body.replace(/stroke-linejoin/g, 'strokeLinejoin');
    // Remove inline comments
    body = body.replace(/<!--[\s\S]*?-->/g, '');

    return body;
}

for (const [file, route] of Object.entries(routes)) {
    const filePath = path.join(screensDir, file);
    if (!fs.existsSync(filePath)) {
        console.log(`Skipping ${file}, not found.`);
        continue;
    }
    const html = fs.readFileSync(filePath, 'utf8');
    const jsx = convertHtmlToJsx(html);
    
    const pagePath = path.join(appDir, route);
    fs.mkdirSync(path.dirname(pagePath), { recursive: true });
    
    const componentStr = `import React from 'react';

export default function Page() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-white min-h-screen">
      ${jsx}
    </div>
  );
}
`;
    fs.writeFileSync(pagePath, componentStr);
    console.log(`Wrote ${pagePath}`);
}
