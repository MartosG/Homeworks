//--------------------HOMEWORK 1--------------------

/*
let phonePrice = 119.95;
let phoneTax = (119.95 * 5) / 100;
let i = 1;
let totalPrice = 0;

while(i <= 30){
 totalPrice = totalPrice + phonePrice + phoneTax;
 i++;
}

console.log("The total price of 30 phones (plus 5% tax) is: " + "$" + totalPrice);
*/

//--------------------HOMEWORK 2--------------------

/*
let userInput = prompt("Enter your birth year: ");
let numberImput = parseInt (userInput);
let zodiacSign = (numberImput - 4) % 12;

if(zodiacSign == 0){
    console.log("Your Chinese Zodiac is Rat");
}
else if(zodiacSign == 1){
    console.log("Your Chinese Zodiac is Ox");
}
else if(zodiacSign == 2){
    console.log("Your Chinese Zodiac is Tiger");
}
else if(zodiacSign == 3){
    console.log("Your Chinese Zodiac is Rabbit");
}
else if(zodiacSign == 4){
    console.log("Your Chinese Zodiac is Dragon");
}
else if(zodiacSign == 5){
    console.log("Your Chinese Zodiac is Snake");
}
else if(zodiacSign == 6){
    console.log("Your Chinese Zodiac is Horse");
}
else if(zodiacSign == 7){
    console.log("Your Chinese Zodiac is Goat");
}
else if(zodiacSign == 8){
    console.log("Your Chinese Zodiac is Monkey");
}
else if(zodiacSign == 9){
    console.log("Your Chinese Zodiac is Rooster");
}
else if(zodiacSign == 10){
    console.log("Your Chinese Zodiac is Dog");
}
else if(zodiacSign == 11){
    console.log("Your Chinese Zodiac is Pig");
}
*/

//--------------------HOMEWORK 3A--------------------
/*
let currentYear = new Date().getFullYear();
let userBirthYear = prompt("What year were you born?");

function ageCalculator(year){
    let userAge = currentYear - year;
    console.log("You are currently " + userAge + " years old.")
}

ageCalculator(userBirthYear);
*/

//--------------------HOMEWORK 3B--------------------

/*
let celsiusTemperature = 25;
let fahrenheitTemperature = 80;

function CelsiusToFahrenheit(temperature){
    fahrenheitTemperature = (temperature * 1.8) + 32;
    console.log(temperature + "C is equal to " + fahrenheitTemperature + "F");
    fahrenheitTemperature = 80; // reset the value back to 80
}


function FahrenheitToCelsius(temperature){
    celsiusTemperature = (((fahrenheitTemperature - 32) * 5) / 9);
    console.log(temperature + "F is equal to " + celsiusTemperature + "C");
}

CelsiusToFahrenheit(celsiusTemperature);
FahrenheitToCelsius(fahrenheitTemperature);
*/

//--------------------HOMEWORK 3C--------------------

/*
let objectVariable = {type:"Object"};
let booleanVariable = true;
let numberVariable = 1;
let stringVariable = "text";
let undefinedVariable;

function returnDataType(dataType){
    console.log("This variable is of type: " + typeof(dataType));
}

returnDataType(objectVariable);
returnDataType(booleanVariable);
returnDataType(numberVariable);
returnDataType(stringVariable);
returnDataType(undefinedVariable);
*/

//--------------------HOMEWORK 3D--------------------

/*
let humanYear = prompt ("Enter human years to calculate to dog years: ");

function dogYearConverter(convert){
    let dogYears = convert * 7;
    console.log(convert + " human years are " + dogYears + " dog years.")
}

dogYearConverter(humanYear);

*/


//--------------------HOMEWORK 3E--------------------

/*
let userBalance = 500;
let amountToWithdraw = prompt("How much money would you like to withdraw?");

function userWithdrawal (amount){
    if (userBalance >= amount){
        userBalance = userBalance - amount;
        console.log("You have withdrawn " + amount + "$ from your account. You have " + userBalance + "$ left.")
    }
    else{
        console.log("You do not have the sufficient funds requested.")
    }
}

userWithdrawal(amountToWithdraw);
*/

//--------------------HOMEWORK 4A--------------------

/*
function findNumber(number, array){
    let occurences = 0;
    for(let i = 0; i <= array.length; i++){
        if(array[i]==number){
            occurences++;
        }
    }
    console.log("The number " + number + " was found " + occurences + " times.");
}

arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arrayTwo = [10, 20, 30, 30, 30, 40];
arrayThree = [15, 30, 45, 15, 45, 15, 150, 300, 15];

findNumber (1, arrayOne);
findNumber (30, arrayTwo);
findNumber (15, arrayThree);
*/

//--------------------HOMEWORK 4B--------------------
/*
let arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let typeEven = "even";
let typeOdd = "odd";

function findNumber(array, type){
    let result = [];
    if(type === "Even"){
       for (let num of array) {
           if(num % 2 === 0){
               result.push(num);
           }
       } 
       console.log(result);
    } else if(type === "Odd"){
        for (let num of array) {
            if(num % 2 !== 0){
                result.push(num);
            }
        } 
        console.log(result);
    } else {
        console.log("The type was not correct. Please enter odd or even");
        return null;
    }
}

findNumber(arrayOne, typeEven);
findNumber(arrayOne, typeOdd);
*/

//--------------------HOMEWORK 4C--------------------

/*
let userInfo = ["Martin", "tired", "programming"];
function myFunction (userInfo){
    console.log("This is " + userInfo[0] + ". " + userInfo[0] + " is in a very " + userInfo[1] + " mood. " + userInfo[0] + " has been " + userInfo[2] + " all day.");
}

myFunction(userInfo);
*/

//--------------------HOMEWORK 4D--------------------

/*
function arrayAddition(numbersArray){
    let arraySum = 0;
    for(let i = 0; i < numbersArray.length; i++){
        arraySum = numbersArray[i] + arraySum;
    }
  console.log(arraySum);
}

let firstArray = [1, 2, 3, 4, 5];

arrayAddition(firstArray);
*/



//--------------------HOMEWORK 4E--------------------

/*
let myStringArray = ["Hello","there","teachers","of","SEDC","!"];

function myFunction(stringArray){
    let sumOfStrings = [""];
    for(let i = 0; i < stringArray.length; i++){
        sumOfStrings = sumOfStrings + stringArray[i] + " ";
    }
    console.log(sumOfStrings);
}

myFunction(myStringArray);
*/

//--------------------HOMEWORK 4F--------------------

/*
for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i + "\n");
    }
    else{
        console.log(i + " ");
    }
}
*/

//--------------------HOMEWORK 4G--------------------

/*
function sumMaxMin(arrayOfNumbers){
    let minNumber = arrayOfNumbers[0];
    let maxNumber = arrayOfNumbers[0];
    for(let i = 0; i < arrayOfNumbers.length; i++){
        if(arrayOfNumbers[i] > maxNumber){
            maxNumber = arrayOfNumbers[i];
        }
        else if(arrayOfNumbers[i] < minNumber){
            minNumber = arrayOfNumbers[i];
        }
    }
    let sumOfMinMax = minNumber + maxNumber;
    console.log("Minimum number is: " + minNumber);
    console.log("Maximum number is: " + maxNumber);
    console.log("Sum of the max and min number is: " + sumOfMinMax);
}

let firstArray = [1, 6, 2, 7, 3, 8, 4, 9, 5, 10];

sumMaxMin(firstArray);
*/

//--------------------HOMEWORK 4H--------------------

/*
let firstNames = ["James", "John", "Robert", "Michael"];
let lastNames = ["Smith", "Johnson", "Williams", "Brown"];

function nameCombinator(firstNames, lastNames){
    let fullNames = [""];

    for (let i = 0; i < firstNames.length && i < lastNames.length; i++){
        fullNames += `${i+1}. ${firstNames[i]} ${lastNames[i]}\n`
    }
    return fullNames;
}

console.log(nameCombinator(firstNames,lastNames));
*/