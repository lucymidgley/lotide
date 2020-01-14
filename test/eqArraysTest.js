const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays" , () => {
  it("returns false for [1, 2] and [1, 2, 3] ", () => {
    assert.deepEqual(eqArrays([1, 2], [1, 2, 3]), false);
  });
  it("returns true for nested arrays [[2, 3], [4]] and [[2, 3], [4]]) ", () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
  it("returns false for nested arrays [[2, 3], [4], 5, 6] and [[2, 3], [4,[5, 6]]]) ", () => {
    assert.deepEqual(eqArrays([[2, 3], [4], 5, 6], [[2, 3], [4,[5, 6]]]), false);
  });
});
