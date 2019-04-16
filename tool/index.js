var fs = require('fs');

function copyFile(src, dist) {
  fs.writeFileSync(dist, fs.readFileSync(src));
}

copyFile('./package.json', './lib/package.json')