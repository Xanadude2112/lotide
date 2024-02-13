const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return expected;
  }
    return false;
};

module.exports = assertEqual;