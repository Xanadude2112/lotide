const without = function(source, itemsToRemove){
  let wantedItems = [];
  for(let i = 0; i < source.length; i++){
    if(!itemsToRemove.includes(source[i])){ // if source index is found in itemsToRemove push it to wantedItems
      wantedItems.push(source[i])
    }
  }
  return wantedItems;
};


module.exports = {without}