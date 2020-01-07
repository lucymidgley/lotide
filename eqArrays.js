const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(arr1, arr2){
  let trueFalse = true;
  if(arr1.length !== arr2.length){
    trueFalse = false; 
  } else{
    for(let i=0; i<arr1.length; i++){
      if(arr1[i]!==arr2[i]){
        trueFalse = false;
      }
    }
  } return trueFalse
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false