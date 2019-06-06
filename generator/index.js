module.exports = (api, options) => {
  if (options.addODS) {
    api.extendPackage({
      dependencies: {
        '@onesait/onesait-ds': '^0.1.79'
      }
    }),
      api.registerCommand('', {})
    api.render('./template')
  }
}
