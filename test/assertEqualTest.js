const assert = require('chai').assert;
const {assertEqual} = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns 'Lighthouse Labs' for 'Lighthouse Labs'", () => {
    assert.strictEqual(assertEqual('Lighthouse Labs', 'Lighthouse Labs'), 'Lighthouse Labs');
  });
  it("returns false if 'Lighthouse Labs' is not 'Lighthouse Labs'", () => {
    assert.strictEqual(assertEqual('Lighthouse Lbs', 'Lighthouse Labs'), false);
  });
});