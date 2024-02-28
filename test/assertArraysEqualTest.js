const assert = require('chai').assert;
const {assertArraysEqual} = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {
  it("returns true when [1, 2, '3'] is [1, 2, '3']", () => {
    assert.strictEqual(assertArraysEqual([1, 2, '3'], [1, 2, '3']), true);
  });
  it("returns false when [1, 2, '3'] is [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, '3'], [1, 2, 3]), false);
  }); 
  it("returns true when ['triangle', 'square', 'circle'], ['triangle','square', 'circle']", () => {
    assert.strictEqual(assertArraysEqual(['triangle', 'square', 'circle'], ['triangle','square', 'circle']), true);
  }); 
});