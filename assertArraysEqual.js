const eqArrays = require('./eqArrays');
const assertArraysEqual = function (arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    return false
  } else {
    return true
  }
};

module.exports = assertArraysEqual;