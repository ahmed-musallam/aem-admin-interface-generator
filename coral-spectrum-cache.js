const path = require('path')
const fs = require('fs');
const tar = require('tar');
const cacheFolderPath = path.join(__dirname, '.spectrum-cache')
const execa = require('execa');
const CORAL_PACKAGE_NAME = '@adobe/coral-spectrum';
const CORAL_FOLDER_NAME_PREFIX = 'adobe-coral-spectrum'

module.exports = {
  cacheFolderPath,
  isCachedVersion(version) {
    return fs.existsSync(path.join(cacheFolderPath, `${CORAL_FOLDER_NAME_PREFIX}-${version}`))
  },
  async downloadVersion(version) {
    if(this.isCachedVersion(version)) {
      return true; // already cached.
    }
    try {
      const {stdout} = await execa('npm', ['pack', `${CORAL_PACKAGE_NAME}@${version}`], {
        cwd: cacheFolderPath
      });
      var packageName = `${CORAL_FOLDER_NAME_PREFIX}-${version}`;
      var packageFolder = path.join(cacheFolderPath, packageName);
      fs.mkdirSync(packageFolder)
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
  async getLatestNVersions(n) {
    try {
      const {stdout} = await execa('npm', ['view', '-json', CORAL_PACKAGE_NAME,'versions']);
      const versions = JSON.parse(stdout)
      return versions.reverse().slice(0,10)
    } catch (e) {
      console.error(e)
    }
  }
}