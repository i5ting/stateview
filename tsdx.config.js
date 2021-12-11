const less = require('rollup-plugin-less');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
        less()
    );
    return config;
  },
};