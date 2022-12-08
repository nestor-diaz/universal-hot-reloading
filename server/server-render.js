import path from 'path';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server';
import { config } from 'config';
import App from '../src/components/App';
import configureStore from '../src/store';
import React from 'react';

const rootPath = path.resolve(__dirname, '../');
const statsFile = path.resolve(__dirname, rootPath, config.loadableStatsPath);

function renderApp(path, callback) {
  const store = configureStore();
  const state = store.getState();

  const component = (
    <Provider store={store}>
      <App />
    </Provider>
  );

  const extractor = new ChunkExtractor({ statsFile });
  const jsx = extractor.collectChunks(component);
  const rendered = renderToString(jsx);

  callback(null, `
    <html>
      <head>
        <title>Sample App</title>
        ${extractor.getLinkTags()}
      </head>
      <body>
        <div id="root">${rendered}</div>
        <script type="text/javascript">
          window.initialStoreData = ${JSON.stringify(state)};
        </script>
        ${extractor.getScriptTags()}
      </body>
    </html>
  `);
}

export default renderApp;
