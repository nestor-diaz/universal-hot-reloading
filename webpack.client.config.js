import { DefinePlugin, HotModuleReplacementPlugin } from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import path from 'path';

process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
  target: 'web',
  mode: 'development',
  entry: ['webpack-hot-middleware/client', './client/app.js'],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        DEVELOPMENT: true
      }
    }),
    new HotModuleReplacementPlugin({
      overlay: {
        sockIntegration: 'whm'
      }
    }),
    new ReactRefreshWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              include: path.join(__dirname, 'client'),
              exclude: /node_modules/,
              plugins: ['react-refresh/babel']
            }
          }
        ]
      },

      // CSS
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]',
                mode: 'global',
                exportOnlyLocals: false,
                mode: 'pure'
              }
            }
          }
        ]
      }

    ]
  }
};
