const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  mode: 'development',
  externals: [nodeExternals()],
  entry: './server/app.js',
  stats: 'errors-only',
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
              plugins: ['react-refresh/babel']
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
    // new RequireCacheHotReloader()
  ]
};
