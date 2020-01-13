const tail = function(array) {
  let n = array.length;
  let newArray = [];
  for (let i = 1; i < n; i++) {
    newArray[i - 1] = array[i];
  }
  return newArray;
};


module.exports = tail;