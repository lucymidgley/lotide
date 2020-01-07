const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(array) {
  let n = array.length;
  let newArray = [];
  for (let i = 1; i < n; i++) {
    newArray[i - 1] = array[i];
  }
  return newArray;
};
console.log(tail([]));
console.log(tail([1]));

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"