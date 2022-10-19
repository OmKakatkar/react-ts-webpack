const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  devtool: 'source-map' /* Recommended by CRA */,
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.production'),
      systemvars: true,
    }),
  ],
};
