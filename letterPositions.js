//TEST ASSERTION FUNCTIONS
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
const letterPositions = function(sentence) {
  const results = {};
  let i = 0;
  for (const letter of sentence) {
    if (letter === " ") {
      i++;
      continue;
    } //increment i and then skip the spaces
    if (results[letter]) {
      results[letter].push(i); //push to exisiting array of indicies
    } else {
      results[letter] = [i]; //add new indices
    }
    i++;
  }
  return results;
};

//TESTS
assertArraysEquals(letterPositions("hello").e, [1]);
console.log(letterPositions("lighthouse in the house"));