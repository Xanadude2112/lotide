const {eqArrays} = require("./eqArrays");

const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);

if(key1.length !== key2.length){
  return false;
}

for(const key of key1){
  if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
    if(!eqArrays(object1[key], object2[key])){
      return false;
    }
  } else if(object1[key] !== object2[key]){
    return false;
  }
}
return true;
};

module.exports = {eqObjects}