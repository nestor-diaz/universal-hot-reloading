import webpack from 'webpack';
import formatMessages from 'webpack-format-messages';
import clientConfig from './webpack.client.config';
import serverConfig from './webpack.server.config';
import Log from '../log';

export const runWebpack = (onCompilationDone) => {
  const {
    hooks,
    compilers: [clientCompiler, serverCompiler]
  } = webpack([clientConfig(), serverConfig]);

  clientCompiler.hooks.beforeCompile.tap('ClientCompiler', () => {
    Log.wait('compiling client...');
  });

  serverCompiler.hooks.beforeCompile.tap('ServerCompiler', () => {
    Log.wait('compiling server...');
  });

  hooks.done.tap('WebpackLauncher', (stats) => {
    const messages = formatMessages(stats);
    const hasErrors = messages.errors.length > 0;
    const hasWarnings = messages.warnings.length > 0;

    onCompilationDone(hasErrors, hasWarnings);

    if (!hasErrors && !hasWarnings) {
      Log.event('successfully compiled');
    }

    if (hasErrors) {
      Log.error('failed to compile');
      messages.errors.forEach(e => console.log(e));
      return;
    }

    if (hasWarnings) {
      Log.warn('compiled with warnings');
      messages.warnings.forEach(w => console.log(w));
    }
  });

  serverCompiler.watch({}, () => {});

  return { clientCompiler, serverCompiler };
};
