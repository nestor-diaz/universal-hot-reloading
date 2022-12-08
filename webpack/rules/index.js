import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// const postCssPlugins = [import('autoprefixer')];

const cssLoaders = (rootPath, isProduction, isServer) => [
  !isServer && 'style-loader',
  isProduction && {
    loader: MiniCssExtractPlugin.loader,
    options: {
      publicPath: rootPath
    }
  },
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
  },
  // {
  //   loader: 'postcss-loader',
  //   options: {
  //     postcssOptions: {
  //       plugins: []
  //     }
  //   }
  // }
].filter(Boolean);

const rules = (rootPath, isProduction = false, isServer = false) => [
  {
    test: /\.js$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          include: path.join(rootPath, 'src'),
          exclude: /node_modules/,
          plugins: isServer || isProduction ? [] : ['react-refresh/babel']
        }
      }
    ]
  },
  {
    test: /\.css$/,
    use: cssLoaders(rootPath, isProduction, isServer)
  }
];

export default rules;
