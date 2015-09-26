var _ = require('underscore');

function above(originalFn, aboveFn) {
  return _.wrap(originalFn, aboveFn);
};

module.exports = above;
