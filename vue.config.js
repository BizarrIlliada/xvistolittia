const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/utils/vars.scss";
          @import "@/assets/styles/utils/mixins.scss";
        `,
      }
    }
  },
})
