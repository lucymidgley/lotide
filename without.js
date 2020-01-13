// TEST/ASSERTION FUNCTIONS
const eqArrays = function(arr1, arr2) {
  let trueFalse = true;
  if (arr1.length !== arr2.length) {
    trueFalse = false;
  } else {
    for (let i = 0; i < arr2.length; i++) {
      if (arr1[i] !== arr2[i]) {
        trueFalse = false;
      }
    }
  }
  return trueFalse;
};

const assertArraysEqual = function(actualArr, expArr) {
  const inspect = require('util').inspect;
  if (eqArrays(actualArr, expArr)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actualArr)} === ${inspect(expArr)}`);
  } else if (!eqArrays(actualArr, expArr)) {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actualArr)} !== ${inspect(expArr)}`);
  }
};

//ACTUAL FUNCTION
const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.indexOf(source[i]) === -1) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

//TEST CASES
assertArraysEqual(without([1, 2, 3, 4], [1, 4]), [2, 3]);
assertArraysEqual(without([1, 2, 3, 4, 'w', 5, 67, 5.5], [1, 4]), [2, 3, 'w', 5, 67, 5.5]);
assertArraysEqual(without([1, 4], [1, 4]), []);
assertArraysEqual(without([1, 'h', 'lucy', 15, 'eijvn', 'monkey'], [15, 'monkey']), [1, 'h', 'lucy', 'eijvn']);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;