const { defineConfig } = require('@vue/cli-service')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/styles/_variables.scss";`
      }
    }
  }
}
// module.exports = {
//   plugins: [],
//   module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         use: [MiniCssExtractPlugin.loader, "css-loader"],
//       },
//     ],
//   },
// };
// module.exports = {
//   configureWebpack: {
//     plugins: [
//       new MiniCssExtractPlugin()
//     ]
//   }
// }
