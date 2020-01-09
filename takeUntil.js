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

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      return results;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const data3 = ["hello", "how", "are", "you", "today", "and", "how", "is", "your", "week", "going"];
assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
assertArraysEqual(takeUntil(data3, x => x === 'how'), ['hello']);
