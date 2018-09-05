// Write your solution in this file!
const driver= {name:'sam'}

function updateDriverWithKeyAndValue(driver,key,value){
  
 let Ndriver = Object.assign({},driver,{[key]:value})
return Ndriver
  
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
   driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key){
  let newdriver = Object.assign({},driver)
return delete newdriver[key]
}
function destructivelyDeleteFromDriverByKey(driver, key){
 return delete driver[key]
}
