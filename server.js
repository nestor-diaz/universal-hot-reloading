import path from 'path';
import express from 'express';
import http from 'http';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import formatMessages from 'webpack-format-messages';
import config from './webpack.client.config';
import serverConfig from './webpack.server.config';
import Log from './log';

const { hooks, compilers: [clientCompiler, serverCompiler] } = webpack([config, serverConfig]);

clientCompiler.hooks.beforeCompile.tap('CompilerServer', () => {
  Log.wait('compiling client...');
});

serverCompiler.hooks.beforeCompile.tap('CompilerServer', () => {
  Log.wait('compiling server...');
});

const app = express();

// Serve hot-reloading bundle to client
app.use(webpackDevMiddleware(clientCompiler, {
  publicPath: config.output.publicPath,
  stats: "errors-only"
}));
app.use(webpackHotMiddleware(clientCompiler, { log: false }));

let server;
hooks.done.tap('CompilerServer', (stats) => {
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

  Object.keys(require.cache).forEach((mod) => {
    if (/[\/\\].app[\/\\]/.test(mod)) {
      delete require.cache[mod];
    }
  });

  // Only run this the first time, when the server hasn't been started.
  if (!server) {
    const bundlePath = path.join(serverConfig.output.path, serverConfig.output.filename);

    // Include server routes as a middleware
    app.use((req, res, next) => {
      import(bundlePath).then((app) => app.default(req, res, next));
    });

    server = http.createServer(app);
    server.listen(3000, 'localhost', (err) => {
      if (err) throw err;

      const addr = server.address();
      Log.ready(`listening at http://${addr.address}:${addr.port}`);
    });
  }
});

serverCompiler.watch({}, () => {});
