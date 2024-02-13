const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

assertArraysEqual([1, 2, "'3'"], [1, 2, "'3'"]);
assertArraysEqual([1, 2, 3], [1, 2, "'3'"]);
assertArraysEqual(["triangle", "square", "circle"], ["triangle","square", "circle"]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);