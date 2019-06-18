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
  api.render('./template')
  api.injectImports(api.entryFile, "import ODS from '@onesait/onesait-ds' // eslint-disable-line")
  
  api.onCreateComplete(() => {
    const { EOL } = require('os')
    const fs = require('fs')
    const contentMain = fs.readFileSync(api.entryFile, { encoding: 'utf-8' })
    const lines = contentMain.split(/\r?\n/g)

    const renderIndex = lines.findIndex(line => line.match(/Vue.config/))
    lines[renderIndex] += `${EOL}  Vue.use(ODS),`

    fs.writeFileSync(api.entryFile, lines.join(EOL), { encoding: 'utf-8' })
  })
}
