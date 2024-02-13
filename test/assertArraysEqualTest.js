const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, "'3'"], [1, 2, "'3'"]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["triangle", "square", "circle"], ["triangle","square", "circle"]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);