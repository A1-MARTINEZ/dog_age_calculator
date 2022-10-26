//Dog year calculator

//my age
var myAge = 36;

//Next line shows the number of early yeara
var earlyYears = 2;
earlyYears *= 10.5;

var laterYears = (myAge -= 2);
laterYears *= 4;

var myAgeInDogYears = earlyYears + laterYears;

var myName = 'Alonso'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
