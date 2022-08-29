import path from 'path';
import express from 'express';
import http from 'http';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import Log from './log';
import { runWebpack } from './webpack/launcher';
import clientConfig from './webpack/webpack.client.config';
import serverConfig from './webpack/webpack.server.config';

const app = express();
let server;

const { clientCompiler } = runWebpack(() => {
  // Only run this the first time, when the server hasn't been created.
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

// Serve hot-reloading bundle to client
app.use(webpackDevMiddleware(clientCompiler, {
  publicPath: clientConfig.output.publicPath,
  stats: "errors-only"
}));

app.use(webpackHotMiddleware(clientCompiler, { log: false }));
