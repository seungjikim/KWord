const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: [
      './src/index.js'
    ],
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader",
                options: { minimize: true }
              }
            ]
          },
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './dist'
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ]
};