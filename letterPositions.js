const eqArrays = function(obj1, obj2){
  actualValue = Object.values(obj1);
  expectValue = Object.values(obj2);
  if(actualValue.length !== expectValue.length){
    return false;     //these have to be false because they will only be false when the loop encounters something different
  }
for(let i = 0; i < actualValue.length; i++){
 if(actualValue[i] !== expectValue[i]){
  return false //these have to be false because they will only be false when the loop encounters something different
 }
}
return true //will always return true unless false --> will be incorrect if opposite
};

const assertArraysEqual = function (arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log(`🛑❌🛑 Assertion Failed: the contents of the objects dont match!`);
  } else {
    console.log(`✅🟢✅ Assertion Passed: the contents of the objects match!`);
  }
};


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const index = sentence[i];

    if (index === " ") {
      continue;
    } else if (!results.hasOwnProperty(index)) {
      results[index] = [i];
    } else {
      results[index].push(i);
    }
  }
  return results;
};

assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);