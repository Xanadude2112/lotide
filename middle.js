const middle = function(array) {
  let answer = [];
  const length = array.length;
  if(length < 3){
    return [];
  }
  if(length % 2 !== 0){
    const middleOdd = Math.floor(length / 2);
    answer.push(array[middleOdd]);
  } else{
    const middleEven1 = length / 2 - 1;
    const middleEven2 = length / 2;
    answer.push(array[middleEven1]);
    answer.push(array[middleEven2]);
  }
  return answer
};

module.exports = {middle};