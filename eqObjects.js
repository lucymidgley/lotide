const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function(object1, object2) {
  // let trueFalse = true;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false; //checked both objects have same length of Object keys array
  } // this means we only need to check one set of keys, if they match then they are the same!
  for (const objectKey of Object.keys(object1)) { //first check if both values are objects but not arrays
    if (!Array.isArray(object1[objectKey]) && !Array.isArray(object2[objectKey]) && object1[objectKey].constructor === Object && object2[objectKey].constructor === Object) {
      if(!eqObjects(object1[objectKey], object2[objectKey])){
        return false
      };
    } else if (Array.isArray(object1[objectKey]) && Array.isArray(object2[objectKey])) { //then check if both values are arrays
      if (!eqArrays(object1[objectKey], object2[objectKey])) {
        return false; //if so, check if both arrays are same
      }
    } else if (object1[objectKey] !== object2[objectKey]) { //else assume both are primitive
      return false; //check they are same
    }
  }
  return true; //if passes all check must be the same!
};

//TESTS
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

const cd3 = { c: "1", d: ["2", 3] , e: [1,2,3]};
assertEqual(eqObjects(cd3, ab), false);

const dc3 = { e: [1,2,3], d: ["2", 3] ,  c: "1" };
assertEqual(eqObjects(cd3, dc3), true);
/// now with nested objects
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);

module.exports = eqObjects;