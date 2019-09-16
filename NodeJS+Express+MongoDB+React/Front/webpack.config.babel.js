import MiniCssExtractPlugin from "mini-css-extract-plugin";
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

const devMode = process.env.NODE_ENV === 'development';

module.exports = {
	//устанавливается в packaje.json (нужен cross-env)
  mode: process.env.NODE_ENV,
  //mode: 'development',
  //mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
		uglifyOptions: {
			output: {
			  comments: false
			}
		  }
	  })
    ]
  },
  devtool: devMode?'inline-source-map':undefined, //'source map' - для того чтобы в chrome в вкладке source можно было читать несобранный код
  devServer: {
    inline:true,
    historyApiFallback: true, //для react-router-dom (cannot get какой-то url)
    port: 8080,
  },
  entry: {
		main: ['babel-polyfill', './index.js'] //для работы async / await
	},
  output:{ 
    path: __dirname, // путь к каталогу выходных файлов
    filename: "bundle.js",  // название создаваемого файла
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
		{
			test: /\.(js|jsx)?$/,
			use: {
				loader: "babel-loader"
		  }
		},
    {
      test: /\.(scss|css)$/,
      use: [
          MiniCssExtractPlugin.loader,
          {
              loader: "css-loader",
              options: {
                  minimize: {
                      safe: true
                  }
              }
          },
          {
              loader: "sass-loader",
              options: {}
          }
      ]
    },
    {
      test: /\.(png|jpe?g|gif|pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {},
        },
      ],
    },
    ]
  },
  plugins: [
	new MiniCssExtractPlugin({
		// Options similar to the same options in webpackOptions.output
		// both options are optional
		filename: "bundle.css"
	  })
  ],
  //нужен для запросов
  externals: {
    'config': JSON.stringify({
     "backendServiceHost": "/",
    })
  }
};