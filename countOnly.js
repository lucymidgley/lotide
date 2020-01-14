//allItems: an array of strings we need to look through
//itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCOunt) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCOunt[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;