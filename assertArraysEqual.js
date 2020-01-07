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
const assertArraysEquals = function(arr1, arr2) {
  console.log(arr1);
  if (eqArrays(arr1, arr2)) {
    console.log("✅✅✅ Assertion Passed:", arr1, " === ", arr2);
  } else if (!eqArrays(arr1, arr2)) {
    console.log("❌❌❌ Assertion Failed:", arr1, " !== ", arr2);
  }
};
assertArraysEquals([1, 2], [1, 2, 3]);
assertArraysEquals([1, 2, 3], [3, 2, 1]);
assertArraysEquals(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEquals(["1", "2", "3"], ["1", "2", 3]);