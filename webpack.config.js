const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require('node:path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'main.js'
    },
    
      mode: 'production',
      
    plugins: [
        new MiniCssExtractPlugin(),
    
    ],
      module: {
        rules: [
          {
            test: /\.css$/i,
             use: [MiniCssExtractPlugin.loader, "css-loader"],
      
          },
        ],
      },
      optimization: {
        minimizer: [
          `...`,
          new CssMinimizerPlugin(),
        ],
      },      
}