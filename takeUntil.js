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

const takeUntil = (array, callback) => {
  let resultArr = [];
  for(let item of array){
    if(!callback(item)){ //if the callback at the array index is false, continue to push into the array
      resultArr.push(item);
    }else{
      break; // if the callback at the array index is true, the loop breaks
    }
  }
  return resultArr;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);

module.exports = {takeUntil}