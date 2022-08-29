import webpack from 'webpack';
import formatMessages from 'webpack-format-messages';
import clientConfig from './webpack.client.config';
import serverConfig from './webpack.server.config';
import Log from '../log';

export const runWebpack = (onServerCompilationDone) => {
  const {
    hooks,
    compilers: [clientCompiler, serverCompiler]
  } = webpack([clientConfig, serverConfig]);

  clientCompiler.hooks.beforeCompile.tap('ClientCompiler', () => {
    Log.wait('compiling client...');
  });

  serverCompiler.hooks.beforeCompile.tap('ServerCompiler', () => {
    Log.wait('compiling server...');
  });

  serverCompiler.hooks.done.tap('ServerCompiler', onServerCompilationDone);

  hooks.done.tap('WebpackLauncher', (stats) => {
    const messages = formatMessages(stats);

    if (!messages.errors.length && !messages.warnings.length) {
      Log.event('compiled client and server...');
    }

    if (messages.errors.length) {
      Log.error('failed to compile');
      messages.errors.forEach(e => console.log(e));
      return;
    }

    if (messages.warnings.length) {
      Log.warn('compiled with warnings');
      messages.warnings.forEach(w => console.log(w));
    }
  });

  serverCompiler.watch({}, () => {});

  return { clientCompiler, serverCompiler };
};
