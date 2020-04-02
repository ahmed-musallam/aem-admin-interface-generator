const path = require('path')
const coralSpectrumPath = path.join(__dirname, 'node_modules/@adobe/coral-spectrum')
const coralSpectrumVersion = require(coralSpectrumPath + '/package.json').version
const fs = require('fs');
module.exports = {
  appsRelativePath: (path, suffix) => {
    if (path.indexOf("/apps") > -1) {
      relativePath  = path.split("/apps").pop();
      if (relativePath) {
        relativePath = relativePath.substring(1);
        relativePath = relativePath + '/' + suffix;
      } else {
        relativePath = suffix;
      }
      return relativePath;
    } else {
      return path;
    }
  },
  coralSpectrumVersion: coralSpectrumVersion,
  getCoralJs: () => {
    return fs.readFileSync(coralSpectrumPath + '/dist/js/coral.min.js').toString();
  },
  getCoralCss: () => {
    return fs.readFileSync(coralSpectrumPath + '/dist/css/coral.min.css').toString();
  },
  getCoralResources: (resourceName) => {
    return fs.readFileSync(coralSpectrumPath + '/dist/resources/' + resourceName).toString();
  }
}