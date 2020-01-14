const findKeyByValue = function(object, value) {
  for (const objectKey in object) {
    if (object[objectKey] === value) {
      return objectKey
    }
  }
};



module.exports = findKeyByValue;