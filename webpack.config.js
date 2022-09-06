const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer:{
    static: path.resolve(__dirname, 'public')
  },
  plugins:[
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test:/\.jsx$/,
        exclude:/node_modules/,
        use: 'babel-loader',

      },
      {
        test:/\.scss$/,
        exclude:/node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],

      }
    ]
  }
}