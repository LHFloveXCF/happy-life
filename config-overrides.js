const { override, addWebpackModuleRule, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackModuleRule({
    test: /\.scss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /\.module\.scss$/, // 使用正则来自动应用 CSS Modules
          },
          importLoaders: 1, // 允许一个额外的 loader 通过 @import 引入
        },
      },
      'sass-loader',
    ],
    // 注意：这里不需要 include 选项，因为我们在 css-loader 的 options 中使用了 auto 属性
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src/')
  })
);