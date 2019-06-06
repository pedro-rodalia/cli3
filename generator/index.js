module.exports = (api, options) => {
  if (options.addODS) {
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
    api.extendPackage({
      dependencies: {
        '@onesait/onesait-ds': '^0.1.7',
        'pug-loader': '^2.4.0'
      }
    })
    api.render('./template')
  }
}
