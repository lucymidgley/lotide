const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  differentDrama: "The Wire"
};


describe("#bestTvShowsByGenre" , () => {
  it("returns drama for (bestTvShowsByGenre,\"The Wire\") ", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns undefined for absent value ", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Heroes"), undefined);
  });
});

