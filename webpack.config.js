const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const GenerateJsonFromJsPlugin = require('generate-json-from-js-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    port: 8080,
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: '/node_modules/'
    },
    {
      test: /\.(png|svg|JPG|jpeg|jpg|gif|woff(2)?|ogg|eot|ttf|otf|mp3)$/,
      type: 'asset/resource',
    },
    {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, {
        loader: 'css-loader',
        options: {
          importLoaders: 1
        }
      },
        'postcss-loader'
      ]
    },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'en.html',
      template: './src/en.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'ie.html',
      template: './src/ie.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'mail.php',
      template: './src/mail.php'
    }),
    new GenerateJsonFromJsPlugin({
      path: './src/scripts/manifest.js',
      filename: 'manifest.json',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
} 