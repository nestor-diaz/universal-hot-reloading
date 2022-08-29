import path from 'path';

const cssLoaders = (isServer) => [
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      modules: {
        localIdentName: '[name]__[local]__[hash:base64:5]',
        mode: 'global',
        exportOnlyLocals: isServer,
        mode: 'pure'
      }
    }
  }
];

export default (rootPath, isServer = false) => [
  {
    test: /\.js$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          include: path.join(rootPath, 'src'),
          exclude: /node_modules/,
          plugins: isServer ? [] : ['react-refresh/babel']
        }
      }
    ]
  },
  {
    test: /\.css$/,
    use: isServer ?
      cssLoaders(isServer) :
      ['style-loader', ...cssLoaders(isServer)]
  }
];
