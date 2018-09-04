// Write your solution in this file!
const driver ={
  name:"sam"
};

function updateDriverWithKeyAndValue(driver, key, value)
{
  let copyObj={...driver,[key]:value}
  return copyObj
  ;
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key]=value;
  return driver
}
function deleteFromDriverByKey(driver, key)
{
  let copyObj = {...driver};
  delete copyObj[key];
  return copyObj;
}
function destructivelyDeleteFromDriverByKey(driver, key)
{
  delete driver[key];
  return driver;
}