const path = require('path')
const coralCache = require("./coral-spectrum-cache")

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
  getCoralPath(version) {
    return path.join(coralCache.cacheFolderPath, `adobe-coral-spectrum-${version}/package`)
  },
  getCoralJs(version) {
    return fs.readFileSync(this.getCoralPath(version) + '/dist/js/coral.min.js').toString();
  },
  getCoralCss(version) {
    return fs.readFileSync(this.getCoralPath(version) + '/dist/css/coral.min.css').toString();
  },
  getCoralResources (resourceName, version) {
    return fs.readFileSync(this.getCoralPath(version) + '/dist/resources/' + resourceName).toString();
  }
}