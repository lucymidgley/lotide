//TEST ASSERTION FUNCTIONS
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//ACTUAL FUNCTION
const findKeyByValue = function(object, value) {
  for (const objectKey in object) {
    if (object[objectKey] === value) {
      return objectKey
    }
  }
};

//SOME TESTS
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  differentDrama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const bestMoviesShowsByGenre = {
  sciFi: "Movie A",
  comedy: "Movie B",
  drama:  "Movie C"
};

assertEqual(findKeyByValue(bestMoviesShowsByGenre, "Movie A"), "sciFi");
assertEqual(findKeyByValue(bestMoviesShowsByGenre, "Movie B"), "comedy");
assertEqual(findKeyByValue(bestMoviesShowsByGenre, "Movie C"), "drama");
assertEqual(findKeyByValue(bestMoviesShowsByGenre, "Movie D"), undefined);

const person = {
  name: "Lucy",
  age: 25,
  hobby:  "trumpet",
  transport: "bicyle",
  country: "England"
};

assertEqual(findKeyByValue(person, "Lucy"), "name");
assertEqual(findKeyByValue(person, 25), "age");
assertEqual(findKeyByValue(person, "bicyle"), "transport");
assertEqual(findKeyByValue(person, "Patrick"), undefined);


module.exports = findKeyByValue;