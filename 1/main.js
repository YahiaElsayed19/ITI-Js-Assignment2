// Q1

// function printNumber(enteredNumber) {
//     console.log(enteredNumber);
//     document.getElementById("entered-number").innerHTML = `Entered Number = ${enteredNumber}`
// }
// var enteredNumber = parseInt(window.prompt("Enter a number"))
// printNumber(enteredNumber)

// --------------------------------------------------------------------

//Q2

// function printNumberAndDividedBy3And4(enteredNumber) {
//     console.log(enteredNumber);
//     if (enteredNumber % 3 === 0 && enteredNumber % 4 === 0) {
//         console.log("Yes");
//     } else {
//         console.log("no");
//     }
// }
// var enteredNumber = Number(window.prompt("Enter a number"))
// printNumberAndDividedBy3And4(enteredNumber)

// --------------------------------------------------------------------

// Q3

// function printHighestNumber(firstNumber, secondNumber) {
//     if (firstNumber > secondNumber) {
//         console.log(firstNumber);
//         document.getElementById("max-number").innerHTML = `Max Number = ${firstNumber}`
//     } else {
//         console.log(secondNumber);
//         document.getElementById("max-number").innerHTML = `Max Number = ${secondNumber}`
//     }

// }
// var firstNumber = Number(window.prompt("Enter first number"))
// var secondNumber = Number(window.prompt("Enter second number"))
// printHighestNumber(firstNumber, secondNumber)

// --------------------------------------------------------------------

//Q4

// function printNumberType(enteredNumber) {
//     if (enteredNumber < 0) {
//         console.log("Negative");
//         document.getElementById("number-type").innerHTML = `Number type is ( Negative )`
//     } else {
//         console.log("Positive");
//         document.getElementById("number-type").innerHTML = `Number type is ( Positive )`
//     }

// }
// var enteredNumber = Number(window.prompt("Enter a number"))
// printNumberType(enteredNumber)

// --------------------------------------------------------------------

//Q5

// function printMaxMin(firstNumber, secondNumber, thirdNumber) {
//     var numbersArray = [firstNumber, secondNumber, thirdNumber]
//     var sortednumbersArray = numbersArray.sort((a, b) => a - b);

//     console.log(`Min number: ${sortednumbersArray[0]}`, `Max number: ${sortednumbersArray[2]}`);
//     document.getElementById("max-number").innerHTML = `Max Number = ${sortednumbersArray[2]}`
//     document.getElementById("min-number").innerHTML = `Min Number = ${sortednumbersArray[0]}`

// }
// var firstNumber = Number(window.prompt("Enter first number"))
// var secondNumber = Number(window.prompt("Enter second number"))
// var thirdNumber = Number(window.prompt("Enter third number"))
// printMaxMin(firstNumber, secondNumber, thirdNumber)

// --------------------------------------------------------------------

//Q6

// function printNumberType(enteredNumber) {
//     if (enteredNumber % 2 == 0) {
//         console.log("even");
//         document.getElementById("number-type").innerHTML = `Number type is ( even )`
//     } else {
//         console.log("odd");
//         document.getElementById("number-type").innerHTML = `Number type is ( odd )`
//     }

// }
// var enteredNumber = Number(window.prompt("Enter a number"))
// printNumberType(enteredNumber)

// --------------------------------------------------------------------

//Q7

// function printletterType(enterdLetter) {
//     switch (enterdLetter.toLocaleLowerCase()) {
//         case "a":
//         case "e":
//         case "i":
//         case "o":
//         case "u":
//             console.log("Vowel")
//             document.getElementById("letter-type").innerHTML = `letter type is ( vowel )`
//             break;
//         default:
//             console.log("Constant");
//             document.getElementById("letter-type").innerHTML = `letter type is ( constant )`
//     }

// }
// var enterdLetter = window.prompt("Enter a letter")
// printletterType(enterdLetter)

// --------------------------------------------------------------------

//Q8

// function printAllNumbersFrom1toEnterdNumber(enteredNumber) {
//     for (let i = 1; i <= enteredNumber; i++) {
//         console.log(i);
//     }
// }
// var enteredNumber = Number(window.prompt("Enter a number"))
// printAllNumbersFrom1toEnterdNumber(enteredNumber)

// --------------------------------------------------------------------

//Q9

// function print12Multiples(enteredNumber) {
//     for (let i = 1; i <= 12; i++) {
//         console.log(i * enteredNumber);
//     }
// }
// var enteredNumber = Number(window.prompt("Enter a number"))
// print12Multiples(enteredNumber)

// --------------------------------------------------------------------

//Q10

// function printAllEvenNumbersTillEntered(enteredNumber) {
//     for (let i = 1; i <= enteredNumber; i++) {
//         if (i % 2 == 0) {
//             console.log(i);
//         }
//     }
// }
// var enteredNumber = Number(window.prompt("Enter a number"))
// printAllEvenNumbersTillEntered(enteredNumber)

// --------------------------------------------------------------------

//Q11

// function printPowerResult(firstNumber, secondNumber) {
//     console.log(firstNumber ** secondNumber);
//     document.getElementById("power-result").innerHTML = `${firstNumber} ^ ${secondNumber} = ${firstNumber ** secondNumber}`
// }

// var firstNumber = Number(window.prompt("Enter first number"))
// var secondNumber = Number(window.prompt("Enter second number"))
// printPowerResult(firstNumber, secondNumber)

// --------------------------------------------------------------------

//Q12

// function printTotalAveragePercentage() {
//     var subjectsArray = []
//     var total = 0
//     for (var i = 0; i < 5; i++) {
//         subjectsArray[i] = Number(window.prompt(`Enter subject number ${i + 1}`))
//         total += subjectsArray[i]
//     }
//     console.log("Total marks = " + total);
//     console.log("Average marks = " + total / 5);
//     console.log("Percentage = " + (total / 500) * 100);

// }
// printTotalAveragePercentage()

// --------------------------------------------------------------------

//Q13

// function printDaysInMonth(enteredMonth) {
//     var monthsWith31Days = [1, 3, 5, 7, 8, 10, 12];
//     var monthsWith30Days = [4, 6, 9, 11];

//     if (enteredMonth === 2) {
//         console.log(`Number of days in month ${enteredMonth}: 28 or 29`);
//     } else if (monthsWith31Days.includes(enteredMonth)) {
//         console.log(`Number of days in month ${enteredMonth}: 31`);
//     } else if (monthsWith30Days.includes(enteredMonth)) {
//         console.log(`Number of days in month ${enteredMonth}: 30`);
//     } else {
//         console.log("Invalid month number. Please enter a number between 1 and 12.");
//     }
// }
// var enteredMonth = Number(prompt("Enter month number between (1-12):"));
// printDaysInMonth(enteredMonth)

// --------------------------------------------------------------------

//Q14

// function printPercentageAndGrades() {
//     var subjectsArray = ["Physics", "Chemistry", "Biology", "Mathematics", "Computer"]
//     var total = 0

//     for (var i = 0; i < subjectsArray.length; i++) {
//         subjectsArray[i] = Number(window.prompt(`Enter ${subjectsArray[i]} mark:`))
//         total += subjectsArray[i]
//     }
//     var percentage = (total / 500) * 100
//     var grade
//     if (percentage >= 90) {
//         grade = "A"
//     } else if (percentage >= 80) {
//         grade = "B"
//     } else if (percentage >= 70) {
//         grade = "C"
//     } else if (percentage >= 60) {
//         grade = "D"
//     } else if (percentage >= 40) {
//         grade = "E"
//     } else {
//         grade = "F"
//     }
//     console.log(`The percentage is ${percentage} and the grade is ${grade}`);

// }
// printPercentageAndGrades()

// --------------------------------------------------------------------

//Q15

// function printDaysInMonth(enteredMonth) {
//     var daysInMonth;

//     switch (enteredMonth) {
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             daysInMonth = 31;

//             break;

//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             daysInMonth = 30;
//             break;

//         case 2:
//             daysInMonth = "28 or 29";
//             break;

//         default:
//             daysInMonth = -1;
//             break;
//     }

//     console.log(`Number of days in month ${enteredMonth}: ${daysInMonth}`);
//     document.getElementById("number-of-days").innerHTML = `Number of days in month ${enteredMonth} is ${daysInMonth}`

// }
// var enteredMonth = Number(prompt("Enter month number between (1-12):"));

// printDaysInMonth(enteredMonth)

//---------------------------------------------------------------------

//Q16

// function printletterType(enterdLetter) {
//     switch (enterdLetter.toLocaleLowerCase()) {
//         case "a":
//         case "e":
//         case "i":
//         case "o":
//         case "u":
//             console.log("Vowel")
//             document.getElementById("letter-type").innerHTML = `letter type is ( vowel )`
//             break;
//         default:
//             console.log("Constant");
//             document.getElementById("letter-type").innerHTML = `letter type is ( constant )`
//     }

// }
// var enterdLetter = window.prompt("Enter a letter")
// printletterType(enterdLetter)


//---------------------------------------------------------------------

//Q17

// function printMaxOf2Numbers(firstNumber, secondNumber) {
//     var maxOfTwoNumbers;

//     switch (true) {
//         case firstNumber > secondNumber:
//             maxOfTwoNumbers = firstNumber;
//             break;

//         case secondNumber > firstNumber:
//             maxOfTwoNumbers = secondNumber;
//             break;

//         default:
//             maxOfTwoNumbers = "Both numbers are equal.";
//             break;
//     }

//     console.log("Maximum number:", maxOfTwoNumbers);
//     document.getElementById("letter-type").innerHTML = `Maximum number: ${maxOfTwoNumbers}`

// }
// var firstNumber = Number(window.prompt("Enter first number"))
// var secondNumber = Number(window.prompt("Enter second number"))
// printMaxOf2Numbers(firstNumber, secondNumber)

//---------------------------------------------------------------------

//Q18

// function printNumberType(enteredNumber) {
//     var numberType
//     switch (enteredNumber % 2) {
//         case 0:
//             numberType = "Even";
//             break;

//         case 1:
//             numberType = "Odd";
//             break;

//         default:
//             numberType = "Invalid input";
//             break;
//     }

//     console.log(`${enteredNumber} is ${numberType}.`);
//     document.getElementById("number-type").innerHTML = `${enteredNumber} is ${numberType}.`

// }
// var enteredNumber = Number(window.prompt("Enter a number"))
// printNumberType(enteredNumber)

//---------------------------------------------------------------------

// Q19

// function printNumberType(enteredNumber) {
//     var numberType
//     switch (true) {
//         case enteredNumber > 0:
//             numberType = "positive";
//             break;

//         case enteredNumber < 0:
//             numberType = "negative";
//             break;

//         default:
//             numberType = "zero";
//             break;
//     }

//     console.log(`${enteredNumber} is ${numberType}.`);

// }

// var enteredNumber = Number(window.prompt("Enter a number"))
// printNumberType(enteredNumber)

//---------------------------------------------------------------------

//Q20

// function smallCalculator(firstNumber, secondNumber, operation) {
//     var result;

//     switch (operation) {
//         case "+":
//             result = firstNumber + secondNumber;
//             break;

//         case "-":
//             result = firstNumber - secondNumber;
//             break;

//         case "*":
//             result = firstNumber * secondNumber;
//             break;

//         case "/":
//             result = firstNumber / secondNumber;
//             break;

//         default:
//             result = "Invalid operation";
//             break;
//     }

//     console.log(`Result: ${result}`);
// }
// var firstNumber = Number(window.prompt("Enter first number"))
// var secondNumber = Number(window.prompt("Enter second number"))
// var operation = window.prompt("Enter a operation from ( +, - , * , / )")

// smallCalculator(firstNumber, secondNumber, operation)

//---------------------------------------------------------------------
