const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return;
  }
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `);
};

const findKey = (obj, cb) => {
  for(const key in obj){
    if(cb(obj[key])){ //if the callback returns the expected value of the object *truthy value* it will return the FIRST instance of the truthy value's key
      return key
    }
  }
  return undefined //return undefined if the callback does not return the expected value of the object
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); //x represents the object--> when obj.stars is 2 return the key at that value
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3), "Akaleri");//x represents the object--> when obj.stars is 3 return the key at that value