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

module.exports = middle;
