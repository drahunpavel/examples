const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "/public"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader" //babel-loader используется для загрузки наших JSX/JavaScript
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"] //css-loader для загрузки и объединения всех CSS файлов в один //style-loader добавит все стили внутрь тега документа style
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
};
