const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.json')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./src');
let updatedCount = 0;
files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    let changed = false;
    
    if (content.includes('"/logo.png"')) {
        content = content.replace(/"\/logo\.png"/g, '"/demo/kvs/logo.png"');
        changed = true;
    }
    if (content.includes("'/logo.png'")) {
        content = content.replace(/'\/logo\.png'/g, "'/demo/kvs/logo.png'");
        changed = true;
    }
    if (content.includes('"/images/')) {
        content = content.replace(/"\/images\//g, '"/demo/kvs/images/');
        changed = true;
    }
    if (content.includes("'/images/")) {
        content = content.replace(/'\/images\//g, "'/demo/kvs/images/");
        changed = true;
    }
    if (content.includes('"/client_')) {
        content = content.replace(/"\/client_/g, '"/demo/kvs/client_');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(f, content);
        console.log('Updated ' + f);
        updatedCount++;
    }
});
console.log('Total files updated: ' + updatedCount);
