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

const assertArraysEquals = function(arr1, arr2) {
  console.log(arr1);
  if (eqArrays(arr1, arr2)) {
    console.log("✅✅✅ Assertion Passed:", arr1, " === ", arr2);
  } else if (!eqArrays(arr1, arr2)) {
    console.log("❌❌❌ Assertion Failed:", arr1, " !== ", arr2);
  }
};

// ACTUAL FUNCTION
const middle = function(array) {
  let output = [];
  let midIndex = Math.ceil(array.length / 2) - 1;
  if (array.length >= 3) {
    if (array.length % 2 === 0) {
      output.push(array[midIndex], array[midIndex + 1]);
    } else {
      output.push(array[midIndex]);
    }
  }
  return output;
};

//TEST CODE
assertArraysEquals(middle([1]), []);
assertArraysEquals(middle([1, 2]), []);
assertArraysEquals(middle([1, 2, 3]), [2]);
assertArraysEquals(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEquals(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEquals(middle([1, 2, 3, 4]), [2, 3]);