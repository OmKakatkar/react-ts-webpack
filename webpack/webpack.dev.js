const path = require('path');
const Dotenv = require('dotenv-webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
  },
  devtool: 'cheap-module-source-map' /* Recommended by CRA */,
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.development'),
      systemvars: true,
    }),
    new ReactRefreshWebpackPlugin(),
    /** TODO: Add webpack.HotModuleReplacementPlugin if Hot Reload fails
     *  Check www.github.com/pmmmwh/react-refresh-webpack-plugin
     */
  ],
};
