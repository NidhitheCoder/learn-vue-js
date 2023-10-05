const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  parallel: false,
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
         @import "@/assets/scss/global.scss";
        `
      }
    }
  }
})
