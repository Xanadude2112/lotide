const assert = require("chai").assert;
const {middle} = require('../middle');

describe("#middle", () => {
  it("returns [2] for [1,2,3]", () => {
    const first = [1, 2, 3];
    assert.strictEqual(first.length, 3);
    assert.deepEqual(middle(first), [2]);
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    const second = [1, 2, 3, 4, 5];
    assert.strictEqual(second.length, 5);
    assert.deepEqual(middle(second), [3]);
  });
  it("returns [3,4] for [1, 2, 3, 4, 5,6]", () => {
    const third = [1, 2, 3, 4, 5, 6];
    assert.strictEqual(third.length, 6);
    assert.deepEqual(middle(third), [3,4]);
  });
  it("returns [] when given an array with 1 item or less within it", () => {
    const fourth = [1];
    assert.strictEqual(fourth.length, 1);
    assert.deepEqual(middle(fourth), []);
  });
  it("returns [] when given an array with 1 item or less within it", () => {
    const fifth = [];
    assert.strictEqual(fifth.length, 0);
    assert.deepEqual(middle(fifth), []);
  });
});