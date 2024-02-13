const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

const first = [1, 2, 3];
const second = [1, 2, 3, 4, 5];
const third = [1, 2, 3, 4, 5, 6];
const fourth = [1];
const fifth = [];
console.log(middle(first));
console.log(middle(second));
console.log(middle(third));
console.log(middle(fourth));
console.log(middle(fifth));

assertArraysEqual(middle(first),[2])
assertArraysEqual(middle(second),[3])
assertArraysEqual(middle(third),[3, 4])
assertArraysEqual(middle(fourth),[]);
assertArraysEqual(middle(fifth),[]);