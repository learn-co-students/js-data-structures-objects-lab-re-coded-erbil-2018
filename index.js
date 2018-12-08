// Write your solution in this file!
let driver = {};


function updateDriverWithKeyAndValue(obj, key, val){
  const newDriver = {...driver}
  newDriver[key] = val;
  return newDriver
}


function destructivelyUpdateDriverWithKeyAndValue(obj, key, val){
  obj[key] = val;
  return obj
}


function deleteFromDriverByKey(driver, key){
  let newD = {...driver};
  delete newD[key]
  return newD
}


function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
}
