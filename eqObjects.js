const eqArrays = require('./eqArrays')

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


module.exports = eqObjects;