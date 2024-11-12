const path = require('path')

const sassLoaderOptions = {
  implementation: require('node-sass'),
  sassOptions: {
    includePaths: ['./node_modules']
  }
};

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
}