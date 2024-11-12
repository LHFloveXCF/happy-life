const path = require('path')

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader",
              "css-loader",
              {
                loader: "sass-loader",
                options: {
                  sassOptions: {
                    style: `compressed`,
                    loadPaths: ["absolute/path/a", "absolute/path/b"],
                  },
                },
              },
            ],
          },
        ],
      },
}