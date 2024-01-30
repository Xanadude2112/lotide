const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `);
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
const objRes = {};

for(const item of allItems){
  if(itemsToCount[item]){
    if(objRes[item]){
      objRes[item] += 1
    }else {
      objRes[item] = 1
    }
  }
}
return objRes;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

// result1["Jason"]
// result1["Karima"]
// result1["Fang"]
// result1["Agouhanna"]

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
