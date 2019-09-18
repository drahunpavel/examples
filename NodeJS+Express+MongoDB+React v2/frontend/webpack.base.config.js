import Config from "webpack-config";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ExtractTextPlugin from "extract-text-webpack-plugin";


const devMode = process.env.NODE_ENV === 'development';

export default new Config().merge({
  devtool: devMode?'inline-source-map':undefined,
  entry: ['babel-polyfill', './index.js'],
  output: {
    path: __dirname + '/public',
    publicPath: '/'
  },
  devServer: {
    port: 8080
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules:[
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          // 'eslint-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          // 'eslint-loader',
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        },{
          loader: "css-loader"
        },{
          loader: "less-loader",
          options: {
            javascriptEnabled: true
          }
        }]
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {}
        }]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].bundle.[hash].css'),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    })
  ],
  externals: {
    'config': JSON.stringify({
     "backendServiceHost": "/",
    })
  }
});
