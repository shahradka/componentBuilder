const path = require('path');

// This module isn't used to build the documentation. We use Next.js for that.
// This module is used by the visual regression tests to run the demos.
module.exports = {
  context: path.resolve(__dirname),
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {},
    extensions: ['.js', '.ts', '.tsx', '.d.ts'],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/',
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules\/(?!@mui)/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.md$/,
        loader: 'raw-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'string-replace-loader',
        options: {
          search: '__RELEASE_INFO__',
          replace: 'MTU5NjMxOTIwMDAwMA==', // 2020-08-02
        },
      },
    ],
  },
};
