const { override, addWebpackAlias, addWebpackModuleRule } = require('customize-cra');
 
const customizeScssRule = () => (config) => {
  const scssRule = config.module.rules.find(rule => rule.test.toString() === '/\\.css$/');
  scssRule.test = /\.(css|scss)$/;
 
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
    ],
    include: /node_modules/,
  });
 
  return config;
};
 
module.exports = override(
  addWebpackModuleRule(customizeScssRule()),
  addWebpackAlias({
    'react-dom': '@hot-loader/react-dom',
  })
);