const eqArrays = require('./eqArrays');
const assertArraysEqual = function (arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log(`🛑❌🛑 Assertion Failed: ${arr1} is not equal to ${arr2}!`);
    return false
  } else {
    console.log(`✅🟢✅ Assertion Passed: ${arr1} is equal to ${arr2}!`);
    return true
  }
};

module.exports = assertArraysEqual;