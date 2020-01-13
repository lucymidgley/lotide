// TEST/ASSERTION FUNCTIONS
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//ACTUAL FUNCTION
//allItems: an array of strings we need to look through
//itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCOunt) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCOunt[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};
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
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);

module.exports = countOnly;