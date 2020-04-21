const path = require('path')
const fs = require('fs');
const tar = require('tar');
const cacheFolderPath = path.join(__dirname, '.spectrum-cache')
const execa = require('execa');

module.exports = {
  async downloadVersion(version) {
    try {
      const {stdout} = await execa('npm', ['pack', `@adobe/coral-spectrum@${version}`], {
        cwd: cacheFolderPath
      });
      var packageName = `adobe-coral-spectrum-${version}`;
      var packageFolder = path.join(cacheFolderPath, packageName);
      tar.x({
        file: path.join(cacheFolderPath, `${packageName}.tgz`),
        sync: true,
        cwd: packageFolder
      })
    } catch (e) {
      console.error(e)
    }
    return true;
  },
  
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