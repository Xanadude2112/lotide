const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
    return;
  }

  if (actual !== expected) {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
    return;
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
