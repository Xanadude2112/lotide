const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = ['Yo Yo', 'Lighthouse', 'Labs'];
    assert.strictEqual(words.length, 3);
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });
  it("returns ['square', 'triangle', 'star'] for ['circle', 'square', 'triangle', 'star']", () => {
    const shapes = ['circle', 'square', 'triangle', 'star'];
    assert.strictEqual(shapes.length, 4);
    assert.deepEqual(tail(shapes), ['square', 'triangle', 'star']);
  });
  it("returns [] when given an array with 1 item or less within it", () => {
    const test = ['test'];
    assert.strictEqual(test.length, 1);
    assert.deepEqual(tail(test), []);
  });
  it("returns [] when given an array with 1 item or less within it", () => {
    const gorp = [];
    assert.strictEqual(gorp.length, 0);
    assert.deepEqual(tail(gorp), []);
  });
});

