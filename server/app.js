import express from 'express';
import renderApp from './server-render';

const app = express.Router();

app.get('/whoami', (req, res) => {
  res.send("You are a winner 10");
});

// Anything else gets passed to the client app's server rendering
app.get('*', (req, res, next) => {
  renderApp(req.path, (err, page) => {
    if (err) return next(err);
    res.send(page);
  });
});

export default app;
