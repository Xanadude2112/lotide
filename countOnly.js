const countOnly = function (allItems, itemsToCount) {
const objRes = {};

for(const item of allItems){
  if(itemsToCount[item]){
    if(objRes[item]){
      objRes[item] += 1
    }else {
      objRes[item] = 1
    }
  }
}
return objRes;
};

module.exports = {countOnly}
