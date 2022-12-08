import webpack from 'webpack';
import formatMessages from 'webpack-format-messages';
import { clientWebpackProdConfig } from './webpack.client.config';
import Log from '../log';

webpack(clientWebpackProdConfig, (err, stats) => {
  if (err) {
    Log.error('failed to compile');
    console.log(err);
    return;
  }

  const messages = formatMessages(stats);
  const hasErrors = messages.errors.length > 0;
  const hasWarnings = messages.warnings.length > 0;

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
    return;
  }
});
