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
  api.injectImports(api.entryFile, `
    import ODS from '@onesait/onesait-ds'

    Vue.use(ODS)
  `)
  api.render('./template')
}
