
// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
const execa = require('execa');
const coralCache = require("../../../coral-spectrum-cache.js")

module.exports = {
  prompt: async function ({ prompter, args }) {
    const versions = await coralCache.getLatestNVersions(10)
    return prompter.prompt(
      [
        {
          type: 'input',
          name: 'name',
          message: "JCR Name (can only contain alphanumericals and '-')",
          validate(value) {
            const valid = /^[a-z0-9\-]+$/i.test(value);
            if (!valid) {
              return "JCR Name can only contain letters, numbers and/or '-'";
            }
            return true;
          }
        },
        {
          type: 'input',
          name: 'title',
          message: "Title"
        },
        {
          type: 'select',
          name: 'coralSpectrumVersion',
          message: "coral-spectrum version to use",
          choices: versions,
          validate: async function (version) {
            console.log(`Downloading coral-spectrum ${version}`)
            const cached = await coralCache.downloadVersion(version)
            return cached;
          }
        }
      ]
    )
  }
}



