import path from 'path';
import { DefinePlugin, HotModuleReplacementPlugin } from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import LoadablePlugin from '@loadable/webpack-plugin';
import rules from './rules';

const ROOT_PATH = path.resolve(__dirname, '../');
const DIST_PATH = path.resolve(__dirname, ROOT_PATH, '.app/static');
const JS_OUTPUT_FILENAME = 'app.[fullhash].js';
const CSS_OUTPUT_FILENAME = 'app.[fullhash].css';
const CLIENT_ENTRY = './src/app.js';
export const OUTPUT_PUBLIC_PATH = '/';

const prodPlugins = [
  new MiniCssExtractPlugin({
    filename: CSS_OUTPUT_FILENAME
  }),
  new LoadablePlugin()
];

const devPlugins = [
  new HotModuleReplacementPlugin({
    overlay: {
      sockIntegration: 'whm'
    }
  }),
  new ReactRefreshWebpackPlugin(),
  new LoadablePlugin()
];

const clientWebpackConfig = (isProduction = false) => ({
  target: 'web',
  mode: isProduction ? 'production' : 'development',
  entry: isProduction ?
    [CLIENT_ENTRY] :
    ['webpack-hot-middleware/client', CLIENT_ENTRY],
  output: {
    path: DIST_PATH,
    filename: isProduction ? JS_OUTPUT_FILENAME : 'client-bundle.js',
    publicPath: OUTPUT_PUBLIC_PATH
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: rules(ROOT_PATH, isProduction)
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        DEVELOPMENT: !isProduction,
        NODE_ENV: isProduction ?
          JSON.stringify('production') :
          JSON.stringify('development')
      }
    }),
    ...(isProduction ? prodPlugins : devPlugins)
  ]
});

export const clientWebpackDevConfig = clientWebpackConfig();
export const clientWebpackProdConfig = clientWebpackConfig(true);

// export default configs;
