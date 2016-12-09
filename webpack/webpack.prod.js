const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractApp = new ExtractTextPlugin({
  filename: 'assets/[name].[hash].css'
});

const extractAntd = new ExtractTextPlugin({
  filename: 'assets/antd.[hash].css'
});

module.exports = {
  entry: {
    polyfills: './src/polyfills',
    vendor: './src/vendor',
    app: './src/main'
  },

  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'assets/[name].[hash].js',
    chunkFilename: 'assets/[id].[hash].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.s?(a|c)ss$/,
        loader: extractApp.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?importLoaders=2&minimize&modules&camelCase!postcss-loader!sass-loader'
        }),
        exclude: /node_modules/
      },
      {
        test: /\.s?(a|c)ss$/,
        loader: extractAntd.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader'
        }),
        include: path.resolve(__dirname, '../node_modules/antd')
      }
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    extractApp,
    extractAntd
  ]
};
