const takeUntil = (array, callback) => {
  let resultArr = [];
  for(let item of array){
    if(!callback(item)){ //if the callback at the array index is false, continue to push into the array
      resultArr.push(item);
    }else{
      break; // if the callback at the array index is true, the loop breaks
    }
  }
  return resultArr;
};

module.exports = {takeUntil}