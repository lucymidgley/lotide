const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } for (let i = 0; i < arr2.length; i++) {
      if(Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
       if(!eqArrays(arr1[i], arr2[i])){
         return false
       }
       }
       else if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  return true;
};

const assertArraysEqual = function(actualArr, expArr) {
  const inspect = require('util').inspect;
  if (eqArrays(actualArr, expArr)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actualArr)} === ${inspect(expArr)}`);
  } else if (!eqArrays(actualArr, expArr)) {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actualArr)} !== ${inspect(expArr)}`);
  }
};
assertArraysEqual([1, 2], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);