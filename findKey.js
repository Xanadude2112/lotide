const findKey = (obj, cb) => {
  for(const key in obj){
    if(cb(obj[key])){ //if the callback returns *truthy value* it will return the FIRST instance of the truthy value's key
      return key;
    }
  }
  return undefined; //return undefined if the callback does not return the expected value of the object
};


module.exports = {findKey}