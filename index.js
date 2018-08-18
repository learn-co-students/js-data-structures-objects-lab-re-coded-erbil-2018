// Write your solution in this file!
const driver={};
function updateDriverWithKeyAndValue(driver, key, value){
  let newDriver = {}
  newDriver[key]=value;
  return Object.assign({},driver,newDriver);
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  let newDriver = {}
  newDriver[key]=value;
  return Object.assign(driver,newDriver);
}

function deleteFromDriverByKey(driver, key){
  let newObj = {...driver}
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  return delete driver[key];
}

