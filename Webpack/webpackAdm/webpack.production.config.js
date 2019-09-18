import webpack from 'webpack';
import Config from 'webpack-config';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';


export default new Config().extend('webpack.base.config.js').merge({
  output: {
    filename: '[name].bundle.min.js?v=[hash]'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      optimization: {
        minimize: false //Update this to true or false
      }
    }),
    new CleanWebpackPlugin(['public'],[]),
    new CopyWebpackPlugin([
      {
        from: 'images',
        to: 'images'
      },
      {
        from: 'font',
        to: 'font'
      }
    ])
  ]
});
