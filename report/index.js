const { buildEngine } = require('ember-engines/lib/engine-addon');

module.exports = buildEngine({
  name: 'report',
  lazyLoading: {
    enabled: true,
  },
});
