// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (drivers) {

    return drivers.slice(0, 2)
}


const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const fareMultiplier = function () {

}
function createFareMultiplier() {

    return function () { }
}


function createFareMultiplier(fare) {

    return function (multiplier) {
        return fare * multiplier
    }
}

console.log(5 * 5)


const fareDoubler = createFareMultiplier(2);{
    
}

console.log(fareDoubler(10))

const fareTripler = createFareMultiplier(3);{
    
}
console.log(fareTripler(12))



function selectDifferentDrivers(drivers, returnFirstTwoDrivers ){

    return drivers.slice(0,2)
}


function selectDifferentDrivers(drivers, returnLastTwoDrivers ){

    return drivers.slice(2)
}

