module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/base/_variables.scss";
          @import "@/assets/scss/base/_mixins.scss";
          @import "@/assets/scss/base/_typography-placeholder.scss";
        `
      }
    }
  }
}
