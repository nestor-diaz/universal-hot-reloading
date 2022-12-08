import express from 'express';
import dotenv from 'dotenv';
import renderApp from './server-render';

dotenv.config();

const app = express.Router();

app.get('/whoami', (req, res) => {
  res.send("You are a winner 1");

});

// Anything else gets passed to the client app's server rendering
app.get('*', (req, res, next) => {
  renderApp(req.path, (err, page) => {
    if (err) return next(err);
    res.send(page);
  });
});

export default app;
