module.exports = (api, options) => {
  if (options.addODS) {
    api.extendPackage({
      dependencies: {
        '@onesait/onesait-ds': '^0.1.7'
      }
    }),
    api.registerCommand('', {})
    api.render('./template')
  }

  api.extendPackage({
    dependencies: {
      'pug-loader': '^2.4.0'
    }
  })
  api.chainWebpack(config =>
    config.module
      .rule('pug')
      .test(/\.pug$/)
        .uses
          .delete('pug-plain-loader')
          .end()
        .use('pug-loader')
          .loader('pug-loader')
  )
}
