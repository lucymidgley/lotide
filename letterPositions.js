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



module.exports = letterPositions;