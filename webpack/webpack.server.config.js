import path from 'path';
import nodeExternals from 'webpack-node-externals';
import ServerRefreshWebpackPlugin from './plugins/serverRefreshWebpackPlugin';
import rules from './rules';

const ROOT_PATH = path.resolve(__dirname, '../');

export default {
  target: 'node',
  mode: 'development',
  externals: [nodeExternals()],
  entry: './server/app.js',
  output: {
    path: path.join(ROOT_PATH, '.app'),
    filename: 'server-bundle.js',
    library: {
      type: 'commonjs2'
    }
  },
  module: {
    rules: rules(ROOT_PATH, true)
  },
  plugins: [
    new ServerRefreshWebpackPlugin()
  ]
};
