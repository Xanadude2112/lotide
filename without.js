const without = function(source, itemsToRemove){
  let wantedItems = [];
  for(let i = 0; i < source.length; i++){
    if(!itemsToRemove.includes(source[i])){
      wantedItems.push(source[i])
    }
  }
  return wantedItems;
};


module.exports = {without}