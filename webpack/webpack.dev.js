const path = require('path');
const webpack = require('webpack');

const port = 8080;

module.exports = {
  entry: {
    polyfills: './src/polyfills',
    vendor: './src/vendor',
    app: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://localhost:${port}`,
      'webpack/hot/only-dev-server',
      './src/main.hmr'
    ]
  },

  devtool: 'cheap-module-source-map',

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'assets/[name].js',
    chunkFilename: 'assets/[id].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.s?(a|c)ss$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=2&camelCase&localIdentName=[name]__[local]--[hash:base64:5]',
          'postcss-loader',
          'sass-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.s?(a|c)ss$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        include: path.resolve(__dirname, '../node_modules/antd')
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],

  devServer: {
    hot: true,
    historyApiFallback: true,
    stats: 'minimal',
    compress: true,
    contentBase: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    port
  }
};
