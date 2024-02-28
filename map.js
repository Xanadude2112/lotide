const map = (arr, cb) => { // map as an arrow function
  const results = [];
  for(let item of arr){
    results.push(cb(item)); //pushing the called back items into the empty array results
  }
  return results
}

module.exports = {map}