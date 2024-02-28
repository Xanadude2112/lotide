const countLetters = (sentence) => {
  let letCount = {};
  for (let letter of sentence) {
    if(letter === " "){
      continue;
    }else if(!letCount.hasOwnProperty(letter)){
      letCount[letter] = 1;
    } else {
      letCount[letter] += 1;
    }
  }
  return letCount;
  };

module.exports = {countLetters}