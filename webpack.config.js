/*
    ./webpack.config.js
*/
const path = require('path');

const isDevelopment = process.env.NODE_ENV === 'development'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  //modules
  module: {
    rules: [
      { 
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      { //js and jsx files will be evaluated by babel and eslint loaders when compiling the project
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader","eslint-loader"]
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader","eslint-loader"]
      }, {
      //FOR SASS IMPLEMENTATION--------------------
        test: /\.module\.s(a|c)ss$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevelopment
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      }
      //---------------------------------------------
    ]  
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  //webpack plugins
  plugins: [
    HtmlWebpackPluginConfig,
    //Added a hash to the filename of the bundles for easy and efficient cache busting.
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    })
  ]
}

