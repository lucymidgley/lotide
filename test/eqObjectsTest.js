const assert = require('chai').assert;
const eqObjects = require('../eqObjects');
const inspect = require('util').inspect;
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const dc3 = { e: [1,2,3], d: ["2", 3] ,  c: "1" };
const cd3 = { c: "1", d: ["2", 3] , e: [1,2,3]};
const obj1 = { a: { y: 0, z: 1 }, b: 2 }
const obj2 = { a: { z: 1 }, b: 2 }

describe("#eqObjects" , () => {
  it(`returns true for ${inspect(ab)} and ${inspect(ba)}`, () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });
  it(`returns true objects ${inspect(dc3)} and ${inspect(cd3)}) `, () => {
    assert.deepEqual(eqObjects(cd3, dc3), true);
  });
  it(`returns false for nested objects ${inspect(obj1)} and ${inspect(obj2)}) `, () => {
    assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });
});

