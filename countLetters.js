const assertEqual = function(actual, expected) {
  const actualKey = Object.keys(actual);
  const expectKey = Object.keys(expected);
  if (actualKey.length !== expectKey.length) {
    console.log(`🛑🛑🛑 Assertion Failed: Object keys count does not match`);
    return;
  }
  for (const key of actualKey) {
    if (actual[key] !== expected[key]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual[key]} !== ${expected[key]} error found at ${key}`);
      return;
    }
  }
  console.log(`✅✅✅ Assertion Passed: The objects match!`);
};

const countLetters = (sentence) => {
  let letCount = {};
  for (let letter of sentence) {
    if(letter === " "){
      continue;
    }else if(!letCount.hasOwnProperty(letter)){
      letCount[letter] = 1;
    } else {
      letCount[letter] += 1;
    }
  }
  return letCount;
  };


assertEqual(countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
assertEqual(countLetters("coding is fun"), { c: 1, o: 1, d: 1, i: 2, n: 2, g: 1, s: 1, f: 1, u: 1 });

module.exports = {countLetters}