const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return;
  }
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `);
  
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2, "'2'");
assertEqual("Elephant", "Human");

