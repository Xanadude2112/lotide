const assert = require("chai").assert;
const {eqArrays} = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true when ['animal'] is ['animal']", () => {
    assert.strictEqual(eqArrays(['animal'], ['animal']), true)
  });
  it("returns true when [1,2,3] is [1,2,3]", () => {
    assert.strictEqual(eqArrays([1,2,3], [1,2,3]), true)
  });
  it("returns false when [1,2,3] is [1,2,'3']", () => {
    assert.strictEqual(eqArrays([1,2,3], [1,2,'3']), false)
  });
  it("returns false when ['1','2','3','4'] is [1,2,3,4]", () => {
    assert.strictEqual(eqArrays(['1','2','3','4'], [1,2,3,4]), false)
  });
  it("returns false when ['1','2','3','4'] is ['1','2','3','4','5']", () => {
    assert.strictEqual(eqArrays(['1','2','3','4'], ['1','2','3','4','5']), false)
  });
});