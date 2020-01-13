const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actualArr, expArr) {
  const inspect = require('util').inspect;
  if (eqArrays(actualArr, expArr)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actualArr)} === ${inspect(expArr)}`);
  } else if (!eqArrays(actualArr, expArr)) {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actualArr)} !== ${inspect(expArr)}`);
  }
};
 
module.exports = assertArraysEqual;