const letterPositions = require('../letterPositions');
const assert = require('chai').assert;
const inspect = require('util').inspect;
const obj = { l: [ 0 ],
  i: [ 1, 11 ],
  g: [ 2 ],
  h: [ 3, 5, 15, 18 ],
  t: [ 4, 14 ],
  o: [ 6, 19 ],
  u: [ 7, 20 ],
  s: [ 8, 21 ],
  e: [ 9, 16, 22 ],
  n: [ 12 ] };
describe("#letterPositions" , () => {
  it(`returns ${inspect(obj)} for lighthouse in the house `, () => {
    
    const result1 = letterPositions("lighthouse in the house");
    assert.deepEqual(result1, { l: [ 0 ],
      i: [ 1, 11 ],
      g: [ 2 ],
      h: [ 3, 5, 15, 18 ],
      t: [ 4, 14 ],
      o: [ 6, 19 ],
      u: [ 7, 20 ],
      s: [ 8, 21 ],
      e: [ 9, 16, 22 ],
      n: [ 12 ] });
  });
});

