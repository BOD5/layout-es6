const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const PATHS = require('./config/paths');

module.exports = {
  entry: [`${PATHS.SRC}/index.js`],
  output: {
    path: `${PATHS.DIST}`,
    clean: true,
  },
  mode: 'development',
  // devtool: 'eval-source-map',
  devServer: {
    static: {
      directory: `${PATHS.DIST}`,
    },
    open: true,
    compress: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.styles.scss$/,
        exclude: /node_modules/,
        use: [
          'sass-to-string',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'compressed',
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: [/\.styles.scss$/, /node_modules/],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.SRC}/index.html`,
      filename: 'index.html',
    }),
  ],
};
