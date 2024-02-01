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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return;
  }
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `);
  
};

const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);

if(key1.length !== key2.length){
  return false;
}

for(const key of key1){
  if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
    if(!eqArrays(object1[key], object2[key])){
      return false;
    }
  } else if(object1[key] !== object2[key]){
    return false;
  }
}
return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba));

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log("Test 3:", eqObjects(cd, dc));

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log("Test 4:", eqObjects(cd, cd2));