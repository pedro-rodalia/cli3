module.exports = {
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: [
            '../node_modules/@onesait/onesait-ds/packages/theme-onesait/src/common/var.scss',
            '../src/assets/scss/base/_variables.scss',
            '../src/assets/scss/base/_mixins.scss',
            '../src/assets/scss/base/_typography-placeholder.scss'
          ]
        })
        .end()
    })
  }
}
