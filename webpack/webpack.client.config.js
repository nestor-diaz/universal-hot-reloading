import path from 'path';
import { DefinePlugin, HotModuleReplacementPlugin } from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import rules from './rules';

const ROOT_PATH = path.resolve(__dirname, '../');

export default {
  target: 'web',
  mode: 'development',
  entry: ['webpack-hot-middleware/client', './client/app.js'],
  output: {
    path: ROOT_PATH,
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: rules(ROOT_PATH)
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
};
