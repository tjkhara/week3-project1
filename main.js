/*
=======================================================

** Week 3 - Project 1 **
*** Function Exercises ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Functions Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

BASIC TRACK: 1-10
ADVANCED TRACK: 11-15
=======================================================
*/

// 1. Define a function called "divideByTwo". It should accept one parameter called "number".
//    The function should divide the number by two and output the answer.

console.log("\nQuestion1\n");

// 1. Define a function called "divideByTwo". It should accept one parameter called "number".
//    The function should divide the number by two and output the answer.

function divideByTwo(number) {
	var output = number/2;
	console.log(output);
}

divideByTwo(10);



// 2. Define a function called "greeting". It should accept two parameters, which will be names.
//    The function should output the a greeting to both people.

console.log("\nQuestion2\n");

// 2. Define a function called "greeting". It should accept two parameters, which will be names.
//    The function should output the a greeting to both people.

function greeting(name1, name2) {
	console.log("Hello " + name1 + " and " + name2);
}

greeting("Joshua","TJ");


// 3. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month, but the price keeps changing.
//    Write a function that takes the price per unit and calculates the total for you each month.

console.log("\nQuestion3\n");

// 3. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month, but the price keeps changing.
//    Write a function that takes the price per unit and calculates the total for you each month.

function priceCalc (pricePerUnit) {
	
	var total;
	total = pricePerUnit * 6;
	return total;
	
}

console.log(priceCalc(23));


// 4. Write a function that accepts the following array and separates the people into two teams.
//    No names next to eachother in the array should be on the same team.
      teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]

// 4. Write a function that accepts the following array and separates the people into two teams.
//    No names next to eachother in the array should be on the same team.

teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]
      
function separate(array) {
	var teamA = [];
	var teamB = [];
	
	for(i=0; i<array.length; i++) {
		
		if(i%2 === 0) {
		teamA.push(array[i]);
		} else {
		teamB.push(array[i]);
		}
		
	}
	
	console.log (teamA,teamB);
}

separate(teammates);



// 5. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.

console.log("\nQuestion5\n");

// 5. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.

function quarter(number) {
	var oneQuarter;
	oneQuarter = number/4;
	return oneQuarter;
}

console.log(quarter(10));


// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.

console.log("\nQuestion 6\n");

// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.

function area (length, breadth) {
	var area = length * breadth;
	return area;
}

console.log(area(5,5));

function peri (length, breadth) {
	var peri = 2*(length + breadth);
	return peri;
}

console.log(peri(5,5));




// 7. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, print a statement to the console about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.

console.log("\nQuestion 7\n");

// 7. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, print a statement to the console about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.

function sleepings(hours) {
	if(hours>8) {
		console.log("I'm getting enough sleep.");
	} else {
		console.log("Need to get more sleep.");
	}
}

sleepings(7);



// 8. Prompt a user to enter a three digit number. Write a function that adds the numbers together.
//    HINT: You may need to google how to turn a string into an integer.
//    Note: Strings can be treated as arrays too.

console.log("\nQuestion 8\n");

// 8. Prompt a user to enter a three digit number. Write a function that adds the numbers together.
//    HINT: You may need to google how to turn a string into an integer.
//    Note: Strings can be treated as arrays too.

function addThreeNums (threeDigitNumber) {
	
	threeDigitString = threeDigitNumber + "";
	sumThree = parseInt(threeDigitString[0]) + parseInt(threeDigitString[1]) + parseInt(threeDigitString[2]);
	return sumThree;
	
	
} 

console.log(addThreeNums(123));



// 9. You've finally gotten around to counting the change in your piggy bank. Write a function that accepts four parameters (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Googling the toFixed method will help you with the format.

console.log("\nQuestion 9\n");

// 9. You've finally gotten around to counting the change in your piggy bank. Write a function that accepts four parameters (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Googling the toFixed method will help you with the format.

function countChange(quarters, dimes, nickels, pennies) {
	var totalCents = quarters*25 + dimes*10 + nickels*5 + pennies*1;
	var totalDollars;
	
	if(totalCents > 100) {
	totalDollars = totalCents/100;
	} else {
		totalDollars = totalCents/100;
	}
	return "$" + totalDollars.toFixed(2);
}

console.log(countChange(1,1,1,1));

// 10. Develop a function that determines a person's age by prompting them for their birth year.

console.log("\nQuestion 10\n");

// 10. Develop a function that determines a person's age by prompting them for their birth year.

function age(birthYear) {
	var date = new Date();
	var currentYear = date.getFullYear();
	var personAge = currentYear - birthYear;
	return personAge;
}

console.log(age(1984));


// ADVANCED TRACK
// 11. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.

console.log("\nQuestion 11\n");

// 11. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//     If the phone number is less than 10 digits or more than 11 digits, assume that 	it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.


function phoneNumberCleanUp (phoneNumber) {
	phoneNumberString = phoneNumber + "";
	if(phoneNumberString.length < 10 || phoneNumberString.length > 11) {
		return "Bad number";
	} else if (phoneNumberString.length === 11 && phoneNumberString[0] === "1") {
		return phoneNumberString.substring(1);
	} else if (phoneNumberString.length === 11 && phoneNumberString[0] !== "1") {
		return "Bad number";
	} else {
		return phoneNumber;
	}
}

console.log(phoneNumberCleanUp(6666666666666));

// 12. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.
       arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]
       
       console.log("\nQuestion 12\n");

// 12. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.
       arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]
       
       function isNumberOrNot (array) {
       	for(i=0; i<arrayOfAllTheThings.length; i++) {
       		console.log("Is " + arrayOfAllTheThings[i] + " a number ?: " + !isNaN(arrayOfAllTheThings[i]));
       	}
       }
       
       isNumberOrNot(arrayOfAllTheThings);

// 13. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     To get the random number rolled by each die, use Math.random and Math.floor.

console.log("\nQuestion 13\n");

// 13. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     To get the random number rolled by each die, use Math.random and Math.floor.

function dieRolling () {
	var die1Value = Math.floor(getRandomArbitrary(1,7));
	var die2Value = Math.floor(getRandomArbitrary(1,7));
	
	var totalOfTwoDies = die1Value + die2Value;
	
	return totalOfTwoDies;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

console.log (dieRolling());

// 14. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.

console.log("\nQuestion 14\n");

// 14. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.



function howManyTimes() {

var monopolyBoardTotal = 40;
var userCount = 0;
var i = 0;

while (userCount < monopolyBoardTotal) {
	i++;
	userCount = dieRolling() + userCount;
	
}

return i;
	
}

console.log(howManyTimes());

// 15. Write a function that takes a year and reports whether or not it is a leap year.
//     Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is.  1900 is not a leapyear, but 2000 is.

console.log("\nQuestion 15\n");

// 15. Write a function that takes a year and reports whether or not it is a leap year.
//     Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is.  1900 is not a leapyear, but 2000 is.

function isItALeapYear (year) {
	if (year%4 === 0 && year%100 === 0 && year%400 === 0) {
		return "Leap year";
	} else if (year%4 === 0 && year%100 === 0) {
		return "Not a leap year";
	} else if (year%4 === 0) {
		return "Leap year";
	} else {
		return "Not a Leap year";
	}
}

console.log(isItALeapYear(2000));
