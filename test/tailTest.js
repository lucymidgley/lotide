const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail" , () => {
  it("returns [\"Lighthouse\", \"Labs\"] for [\"Hello\", \"Lighthouse\", \"Labs\"] ", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns [] for [2] ", () => {
    assert.deepEqual(tail([2]), []);
  });
  it("returns [] for [] ", () => {
    assert.deepEqual(tail([]), []);
  });
});




