const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false; //these have to be false because they will only be false when the loop encounters something different
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; //these have to be false because they will only be false when the loop encounters something different
    }
  }
  return true; //will always return true unless false --> will be incorrect if opposite
};

const assertArraysEqual = function (arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log(`🛑❌🛑 Assertion Failed: ${arr1} is not equal to ${arr2}!`);
  } else {
    console.log(`✅🟢✅ Assertion Passed: ${arr1} is equal to ${arr2}!`);
  }
};

const flatten = function(nestArr) {
  let oneDimensionArr = [];
  for (let i = 0; i < nestArr.length; i++) {
    if (Array.isArray(nestArr[i])) {
      oneDimensionArr = oneDimensionArr.concat(nestArr[i]);
    } else {
      oneDimensionArr.push(nestArr[i]);
    }
  }
  return oneDimensionArr;
};
const nested = [1, 2, [3, 4], 5, [6]];
console.log(flatten(nested));
// // const flattened = flatten(nested);
// console.log(nested);
assertArraysEqual(flatten(nested), [1, 2, 3, 4, 5, 6]);