// Code your solution here
//driverName.toUpperCase() === name.toUpperCase();

let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

 function findMatching(myArray,string){
 return myArray.filter(driver => driver.toLowerCase() === string.toLowerCase())
 }
 findMatching();

function fuzzyMatch(myArray,string){
    return myArray.filter(driver =>driver.startsWith(string));
}

function matchName(myArray,string){
    for (const element in myArray){
        return myArray.filter(driver => driver.name === string)
    }
}