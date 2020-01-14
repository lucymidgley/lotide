const flatten = require('../flatten');
const assert = require('chai').assert;

describe("#flatten" , () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);
  });
  it("returns [1, 2, 5, 6] for [1, 2, [5], [6]]", () => {
    assert.deepEqual(flatten([1, 2, [5], [6]]), [1, 2, 5, 6]);
  });
  it("returns [4, 1, 2, 3, 4, 2, 3, 4] for [[4],[1,2,3,4], 2, 3, 4]", () => {
    assert.deepEqual(flatten([[4],[1,2,3,4], 2, 3, 4]), [4, 1, 2, 3, 4, 2, 3, 4]);
  });
});


