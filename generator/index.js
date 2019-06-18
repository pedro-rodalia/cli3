const { EOL } = require('os')

module.exports = (api, options) => {
  if (options.addODS) {
    api.extendPackage({
      dependencies: {
        '@onesait/onesait-ds': '^0.1.79'
      }
    })
  }
  api.extendPackage({
    dependencies: {
      'sass-resources-loader': '^2.0.1'
    }
  })
  // api.injectImports(api.entryFile, 'Vue.use(ODS)')

  api.injectImports(api.entryFile, ["import ODS from '@onesait/onesait-ds' // eslint-disable-line", "import i18n from './lang/i18n.js'"])

  api.onCreateComplete(() => {
    const entryFile = api.resolve(api.entryFile)
    const fs = require('fs')
    const contentMain = fs.readFileSync(entryFile, { encoding: 'utf-8' })
    const lines = contentMain.split(/\r?\n/g)
    const renderIndex = lines.findIndex(line => line.match(/new Vue/))
    lines[renderIndex] = `Vue.use(ODS);${EOL}${EOL}` + lines[renderIndex]
    fs.writeFileSync(entryFile, lines.join(EOL), { encoding: 'utf-8' })
  })

  api.render('./template')
}
