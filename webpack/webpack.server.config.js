import path from 'path';
import nodeExternals from 'webpack-node-externals';
import ServerRefreshWebpackPlugin from './plugins/serverRefreshWebpackPlugin';

export default {
  target: 'node',
  mode: 'development',
  externals: [nodeExternals()],
  entry: './server/app.js',
  output: {
    path: path.join(__dirname, '.app'),
    filename: 'bundle.js',
    library: {
      type: 'commonjs2'
    }
  },
  module: {
    noParse: [/^config$/],
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              include: path.join(__dirname, 'server'),
              exclude: /node_modules/,
              compact: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: '[name]__[local]__[hash:base64:5]',
              mode: 'global',
              exportOnlyLocals: true,
              mode: 'pure'
            }
          }
        }
      }
    ]
  },
  plugins: [
    new ServerRefreshWebpackPlugin()
  ]
};
