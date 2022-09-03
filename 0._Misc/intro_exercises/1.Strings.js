// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = '1.10'
const numberTwo = '2.30'

console.log(parseFloat(numberOne))
console.log(parseFloat(numberTwo))

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

// --------------------------------------

// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = '1.10'
const anotherNumberTwo = '2.30'

const totalNumber = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo)

console.log(totalNumber.toFixed(2))

// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10
const two = 45
const three = 98

// Show in the console the avg. with 5 decimals

const totalSumAverage = one + two + three / 3

console.log(totalSumAverage.toFixed(5))

// --------------------------------------
// Exercise 4 - Get the character by index

const letters = 'abc'
// Get me the character "c"

console.log(letters.substring(2))

// --------------------------------------
// Exercise 5 - Replace

const fact = 'You are learning javascript!'

// capitalize the J in Javascript

const word = fact.slice(0, 17) + fact.slice(17, 18).toUpperCase() + fact.slice(18)

console.log(word)

// --------------------------------------
