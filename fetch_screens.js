const fs = require('fs');
const { execSync } = require('child_process');

try {
    const content = fs.readFileSync('/Users/omar/.gemini/antigravity/brain/7590d79f-5217-49a7-9ab1-857548adb709/.system_generated/steps/19/output.txt', 'utf8');
    const lines = content.split('\n');
    let jsonStr = '';
    
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('{"screens":[')) {
             jsonStr = lines[i].substring(lines[i].indexOf('{"screens":['));
             break;
        }
    }

    if (!jsonStr) {
        console.log("Could not find JSON in file");
        process.exit(1);
    }

    const json = JSON.parse(jsonStr);
    fs.mkdirSync('/tmp/screens', { recursive: true });

    json.screens.forEach((screen) => {
        const url = screen.htmlCode.downloadUrl;
        const name = screen.title.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
        console.log(`Downloading ${name}...`);
        execSync(`curl -o "/tmp/screens/${name}.html" "${url}"`);
    });
    console.log('Finished downloading screens.');
} catch (e) {
    console.error(e);
}
