import express from 'express';
import renderApp from './server-render';

const app = express.Router();

app.get('/whoami', (req, res) => {
  res.send("You are a winner 11");
});

// Anything else gets passed to the client app's server rendering
app.get('*', function(req, res, next) {
  renderApp(req.path, function(err, page) {
    if (err) return next(err);
    res.send(page);
  });
});

export default app;
