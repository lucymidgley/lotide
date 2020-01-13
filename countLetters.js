// TEST/ASSERTION FUNCTIONS
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//ACTUAL FUNCTION
const countLetters = function(sentence) {
  let sentenceNoSpaces = sentence.split(" ").join("");
  const results = {};
  for (const letter of sentenceNoSpaces) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};
let result1 = countLetters("LHL");
console.log(result1);

module.exports = countLetters;