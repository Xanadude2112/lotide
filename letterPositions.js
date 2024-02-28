const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const index = sentence[i];

    if (index === " ") {
      continue;
    } else if (!results.hasOwnProperty(index)) {
      results[index] = [i];
    } else {
      results[index].push(i);
    }
  }
  return results;
};

module.exports = {letterPositions}