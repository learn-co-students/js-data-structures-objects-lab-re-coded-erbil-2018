// Write your solution in this file!

const driver={};

function updateDriverWithKeyAndValue(driver, key, value){
  
  return Object.assign({[key]: value}, driver);
}

function destructivelyUpdateDriverWithKeyAndValue(drive, key, value){
   drive[key]=value;
   return drive;
}

function deleteFromDriverByKey(driver, key){
        const newObj = Object.assign({}, driver);
        delete newObj[key];
       return newObj;
  
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}



