const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
// eslint-disable-next-line no-unused-vars
const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './src/index.tsx'],
  plugins: [
    new HtmlWebpackPlugin({
      template: './dist/index.html',
    }),
    new Dotenv(),
  ],
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.tsx?$/,
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
};
