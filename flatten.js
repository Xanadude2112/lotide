const flatten = function(nestArr) {
  let oneDimensionArr = [];
  for (let i = 0; i < nestArr.length; i++) {
    if (Array.isArray(nestArr[i])) {
      oneDimensionArr = oneDimensionArr.concat(nestArr[i]);
    } else {
      oneDimensionArr.push(nestArr[i]);
    }
  }
  return oneDimensionArr;
};


module.exports = {flatten}