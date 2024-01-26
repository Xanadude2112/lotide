const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return;
  }
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `);
  
};

const eqArrays = function(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;     //these have to be false because they will only be false when the loop encounters something different
  }
for(let i = 0; i < arr1.length; i++){
 if(arr1[i] !== arr2[i]){
  return false //these have to be false because they will only be false when the loop encounters something different
 }
}
return true //will always return true unless false --> will be incorrect if opposite
};

assertEqual(eqArrays(["animal"], ["animal"]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);