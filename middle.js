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

const middle = function(array) {
  let answer = [];
  const length = array.length;
  if(length === 0){
    return [];
  }
  if(length % 2 !== 0){
    const middleOdd = Math.floor(length / 2);
    answer.push(array[middleOdd]);
  } else{
    const middleEven1 = length / 2 - 1;
    const middleEven2 = length / 2;
    answer.push(array[middleEven1]);
    answer.push(array[middleEven2]);
  }
  return answer
};

const first = [1, 2, 3];
const second = [1, 2, 3, 4, 5];
const third = [1, 2, 3, 4, 5, 6];
const fourth = [1];
const fifth = [];
console.log(middle(first));
console.log(middle(second));
console.log(middle(third));
console.log(middle(fourth));
console.log(middle(fifth));

assertArraysEqual(middle(first),[2])
assertArraysEqual(middle(second),[3])
assertArraysEqual(middle(third),[3, 4])
assertArraysEqual(middle(fourth),[1]);
assertArraysEqual(middle(fifth),[]);