const PLUGIN_NAME = 'ServerRefreshWebpackPlugin';

const deleteCache = () => {
  Object.keys(require.cache).forEach((mod) => {
    if (/[\/\\].app[\/\\]/.test(mod)) {
      delete require.cache[mod];
    }
  });
};

export default class ServerRefreshWebpackPlugin {
  apply(compiler) {
    compiler.hooks.assetEmitted.tap(PLUGIN_NAME, deleteCache);
  }
}
