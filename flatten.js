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
  if (eqArrays(arr1, arr2)) {
    console.log("✅✅✅ Assertion Passed:", arr1, " === ", arr2);
  } else if (!eqArrays(arr1, arr2)) {
    console.log("❌❌❌ Assertion Failed:", arr1, " !== ", arr2);
  }
};

//ACTUAL FUNCTION

const flatten = function(array) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        output.push(array[i][j]);
      }
    } else {
      output.push(array[i]);
    }
  }
  return output;
};
flatten([4],[1,2,3,4], 2, 3, 4);
assertArraysEquals((flatten([1, 2, [3, 4], 5, [6]])),[1, 2, 3, 4, 5, 6]);
assertArraysEquals((flatten([1, 2, [5], [6]])),[1, 2, 5, 6]);
assertArraysEquals(flatten([1]),[1]);
assertArraysEquals(flatten([[4],[1,2,3,4], 2, 3, 4]),[4, 1, 2, 3, 4, 2, 3, 4]);