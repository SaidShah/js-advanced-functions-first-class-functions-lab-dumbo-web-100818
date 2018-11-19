// Code your solution in this file!
const returnFirstTwoDrivers = function (givenArray) {
    return givenArray.slice(0,2);
}

const returnLastTwoDrivers = function(givenArgs) {
  return givenArgs.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(givenInt) {
  return function (multiplier) {
    return  givenInt*multiplier
  };
};

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const fetchSpecifiedDrivers = function(drivers, namedDrivers ){
  return namedDrivers(drivers)
}
