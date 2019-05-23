module.exports = (api, options) => {
  if (options.addODS) {
    api.extendPackage({
      dependencies: {
        '@onesait/onesait-ds': '^1.0.0'
      }
    }),
    api.render('./template')
  }
}
