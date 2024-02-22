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

const without = function(source, itemsToRemove){
  let wantedItems = [];
  for(let i = 0; i < source.length; i++){
    if(!itemsToRemove.includes(source[i])){
      wantedItems.push(source[i])
    }
  }
  return wantedItems;
};

const words = ["hello", "world", "lighthouse"];
const candy = ["mars", "kitkat", "aero", "glossettes", "airheads", "rockets", "oh henry", "popeye"];
console.log(without(words, ["lighthouse"]));
console.log(without(candy, ["glossettes", "rockets", "mars"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(candy, ["mars", "kitkat", "aero", "glossettes", "airheads", "rockets", "oh henry", "popeye"])

module.export = {without}