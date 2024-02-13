const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = ['Yo Yo', 'Lighthouse', 'Labs'];
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });
  it("returns ['square', 'triangle', 'star'] for ['circle', 'square', 'triangle', 'star']", () => {
    const shapes = ['circle', 'square', 'triangle', 'star'];
    assert.deepEqual(tail(shapes), ['square', 'triangle', 'star']);
  });
  it("returns [] when given an array with 1 item or less within it", () => {
    const test = ['test'];
    assert.deepEqual(tail(test), []);
  });
  it("returns [] when given an array with 1 item or less within it", () => {
    const gorp = [];
    assert.deepEqual(tail(gorp), []);
  });
});

