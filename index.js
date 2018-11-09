const driver={
 key1: 'value',
 key2: 'value'};

 function updateDriverWithKeyAndValue(driver, key, value){
  driver={
   name:'Sam',
 address:'11 Broadway'};
   return driver;
 }
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){

 driver.address='12 Broadway';
  return driver
}
function deleteFromDriverByKey(driver, key){
  let newdriver=`name`;
  return delete driver[`newdriver`];
}
function destructivelyDeleteFromDriverByKey(driver, key){

  delete driver.name
  return driver
}
