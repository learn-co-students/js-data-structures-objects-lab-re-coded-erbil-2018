// Write your solution in thi

const driver = {name:'Sam'}

function updateDriverWithKeyAndValue(driver,key,value){
  
 let newdriver = Object.assign({},driver,{[key]:value})
return newdriver
  
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