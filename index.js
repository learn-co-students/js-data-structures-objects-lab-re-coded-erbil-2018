// Write your solution in this file!
const driver = {name: 'nawar', address:'qraqoush'}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = {...driver}
  newDriver.name = 'Sam'
  newDriver.address = '11 Broadway'
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver.name = 'Sam'
  driver['address'] = '12 Broadway'
  return driver
}

function deleteFromDriverByKey(driver, key) {
let newDriver = {...driver}
delete newDriver.name;
return newDriver

}
function destructivelyDeleteFromDriverByKey(driver, key) {
  let newdriver = driver
  delete driver.name;
    return newdriver

}
