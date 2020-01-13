const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//FUNCTION

const findKey = function(object, callback) {
  for (const objectKey in object) {
    if (callback(object[objectKey])) {
      return objectKey;
    }
  }
};



const restaurants = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  sameDrama: "The Wire"
};
const planets = {
  "Mercury": { moons: 0 },
  "Venus":   { moons: 0 },
  "Earth":   { moons: 1 },
  "Mars":    { moons: 2 },
  "Jupier":  { moons: 79 },
  "Saturn":  { moons: 82 },
  "Uranus":  { moons: 27 },
  "Neptune": { moons: 14 }
};

assertEqual((findKey(restaurants, x => x.stars === 2)), "noma");
assertEqual((findKey(bestTVShowsByGenre, x => x === "The Wire")), "drama");
assertEqual((findKey(planets, x => x.moons === 0)), "Mercury");

// const isTheWire = function(x){
//   return x === "The Wire"
// }

// const is2 = function(x) {
//   return x.stars === 2
// }

module.exports = findKey;