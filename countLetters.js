const assertEqual = function(actual, expected) {
  if (actual == expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} == ${expected}`);
    return;
  }
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} != ${expected} `);
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
