const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false; //Return false if any corresponding elements in the arrays are not equal  *ARRAYS ARE NOT EQUAL*
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; //Return false if any corresponding elements in the arrays are not equal *ARRAYS ARE NOT EQUAL*
    }
  }
  return true; //will always return true unless false --> will be incorrect if opposite *ARRAYS ARE EQUAL*
};

const eqObjects = function (object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);

  if (key1.length !== key2.length) {
    return false;
  }

  for (const key of key1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (!eqObjects(actual, expected)) {
    console.log(`🛑🙅🏽‍♂️❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`🟢✅🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};
const obj1 = { a: "1", b: 2 };
const obj2 = { b: 2, a: "1" };
assertObjectsEqual(obj1, obj2);

module.exports = {assertObjectsEqual}