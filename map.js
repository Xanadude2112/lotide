const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false; //these have to be false because they will only be false when the loop encounters something different
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; //these have to be false because they will only be false when the loop encounters something different
    }
  }
  return true; //The function returns true if all elements in both arrays are equal, otherwise it returns false
};

const assertArraysEqual = function (arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log(`🛑❌🛑 Assertion Failed: ${arr1} is not equal to ${arr2}!`);
  } else {
    console.log(`✅🟢✅ Assertion Passed: ${arr1} is equal to ${arr2}!`);
  }
};

const map = (arr, cb) => { // map as an arrow function
  const results = [];
  for(let item of arr){
    results.push(cb(item)); //pushing the called back items into the empty array results
  }
  return results
}

const firstCallback = (str) => str.split("").reverse().join(""); // function to reverse the letter positioning of the words of an array
const secondCallback = (num) => num * 2; // function to multiply the numbers of an array by 2


assertArraysEqual(map(words, firstCallback), [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]);
assertArraysEqual(map(numbers, secondCallback), [ 2,  4,  6,  8, 10, 12, 14, 16, 18, 20 ]);
assertArraysEqual(numbers, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); //to make sure the original array was left unchanged
assertArraysEqual(words, ["ground", "control", "to", "major", "tom"]); //to make sure the original array was left unchanged
