const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return;
  }
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `);
};

const head = function (arrItem){
  return arrItem[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Elephant", "Lighthouse", "Labs"]), "Elephant");
assertEqual(head([1, "1", "Labs"]), 1);
