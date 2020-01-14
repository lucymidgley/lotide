const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe("#countOnly" , () => {
  it("returns { Fang: 2, Jason: 1 } for firstnames and { \"Jason\": true, \"Karima\": true, \"Fang\": true }", () => {
    
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
    assert.deepEqual(result1, { Fang: 2, Jason: 1 });
  });
});


