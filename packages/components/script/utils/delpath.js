const fs = require('fs');
const { componentPath } = require('./paths.js');
const stayFile = ['package.json', 'README.md'];

const delPath = async path => {
  let files = [];

  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);

    files.forEach(async file => {
      let curPath = path + '/' + file;

      if (fs.statSync(curPath).isDirectory()) {
        // recurse

        await delPath(curPath);
      } else {
        // delete file
        if (!stayFile.includes(file)) {
          fs.unlinkSync(curPath);
        }
      }
    });

    if (path != `${componentPath}/latte-ui`) fs.rmdirSync(path);
  }
};
module.exports = delPath;
