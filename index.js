// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
 return Object.assign({},driver,{ [key]:value })
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
   driver[key] = value;
   return driver
}

function deleteFromDriverByKey() {
  let newdriver = Object.assign({},driver,{})
  delete newdriver.name;
  return newdriver
}

function destructivelyDeleteFromDriverByKey(){
 let newdriver = delete driver.name;
 return newdriver
}