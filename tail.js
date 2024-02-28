const tail = function(arr) {
  if (arr.length <= 1) {
    return [];
  }
  return arr.slice(1);//takes lal the array items except the first
};
module.exports = {tail};