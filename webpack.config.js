const webpack = require('webpack');
const path = require('path');

const srcPath = path.join(__dirname, '..', 'publicfolder')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
        {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        },
    ],
  },
};
