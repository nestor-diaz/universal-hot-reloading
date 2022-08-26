// import chokidar from 'chokidar';
import path from 'path';
import express from 'express';
import http from 'http';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.client.config';
import serverConfig from './webpack.server.config';

const { hooks, compilers } = webpack([config, serverConfig]);
const app = express();
let server;

// Serve hot-reloading bundle to client
app.use(webpackDevMiddleware(compilers[0], {
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compilers[0]));

// Do "hot-reloading" of express stuff on the server
// Throw away cached modules and re-require next time
// Ensure there's no important state in there!
// const watcher = chokidar.watch('./server');

// watcher.on('ready', function() {
//   watcher.on('all', function() {
//     console.log("Clearing /server/ module cache from server");
//     Object.keys(require.cache).forEach(function(id) {
//       if (/[\/\\].app[\/\\]/.test(id)) {
//         console.log('clearing cache for', id);
//         delete require.cache[id];
//       }
//     });
//   });
// });

hooks.done.tap('CompilerServer', (stats) => {
  console.log(stats.toString());

  Object.keys(require.cache).forEach(function(id) {
    if (/[\/\\].app[\/\\]/.test(id)) {
      console.log('clearing cache for', id);
      delete require.cache[id];
    }
  });

  // Only run this the first time, when the server hasn't been started.
  if (!server) {
    const bundlePath = path.join(serverConfig.output.path, serverConfig.output.filename);

    // Include server routes as a middleware
    app.use(function(req, res, next) {
      import(bundlePath).then((app) => app.default(req, res, next));
    });

    server = http.createServer(app);
    server.listen(3000, 'localhost', function(err) {
      if (err) throw err;

      const addr = server.address();
      console.log('Listening at http://%s:%d', addr.address, addr.port);
    });
  }
});

compilers[1].watch({}, () => {});

// Anything else gets passed to the client app's server rendering
// app.get('*', function(req, res, next) {
//   require('./server/server-render')(req.path, function(err, page) {
//     if (err) return next(err);
//     res.send(page);
//   });
// });

// Do "hot-reloading" of react stuff on the server
// Throw away the cached client modules and let them be re-required next time
// compiler.hooks.done.tap('hot-reload', () => {
//   console.log("Clearing /client/ module cache from server");
//   Object.keys(require.cache).forEach(function(id) {
//     if (/[\/\\]client[\/\\]/.test(id)) delete require.cache[id];
//   });
// });
