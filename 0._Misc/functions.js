// console.log(add(5, 28))

// gets hoisted
function add(a, b) {
  return a + b
}

// anonymous function afte the equal sign.. does not have a name
const addAnonymousFunction = function (a, b) {
  return a + b
}

const addArrowFunction = (a, b) => {
  return a + b
}

// Single line arrow funktion, mere kompakt dog med ulemper
// Sværere at debugge på, eller hvis ud skal burge flere linjer på funktionerne
const addArrowFunctionCompact = (a, b) => a + b

function genericActionExecutor(anyCallbackFunction, name) {
  // execute some code ...
  return anyCallbackFunction(name)
}

const spitting = (name) => `${name} is spitting.`

// task Write a single line below without changing the above.
// task the output to the terminal should be: Amanda is spitting
// don't call spitting direcly.. use spitting as a callback function

// console.log(genericActionExecutor(spitting, 'Amanda'))

// task create a function that allows Malthe to shoot and call it
// task result should be: Malthe is shooting.

const shooting = (name) => `${name} is shooting.`

// console.log(genericActionExecutor(shooting, 'Malthe'))

// create a SINGLE statement below console logs "Murat" is running away,

console.log(genericActionExecutor((name) => `${name} is running away`, 'Murat'))
