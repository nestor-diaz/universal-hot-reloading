import App from '../client/components/App';
import configureStore from '../client/store';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';

function renderApp(path, callback) {
  const store = configureStore();
  const state = store.getState();

  const rendered = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  callback(null, `
    <html>
      <head>
        <title>Sample App</title>
      </head>
      <body>
        <div id="root">${rendered}</div>
        <script type="text/javascript">
          window.initialStoreData = ${JSON.stringify(state)};
        </script>
        <script src="/client-bundle.js"></script>
      </body>
    </html>
  `);
}

export default renderApp;
