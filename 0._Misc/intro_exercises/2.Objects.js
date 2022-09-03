// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const alienMessage = {
  message: 'Hello, earthling! I bring peace.',
}

const object = alienMessage.message

// Log the message

console.log(object)

// --------------------------------------
// Exercise 2 - Defining an object.

// Create an object that has your name and age.

const info = {
  myName: 'Murat Memis',
  myAge: 30,
}

// --------------------------------------
// Exercise 3 - Add a property

const stackOverflow = {}

stackOverflow.addProperty = 'This is a property!'

// make a rule called isAllowed and let the value be true

stackOverflow.isAllowed = true

// --------------------------------------
// Exercise 4 - Remove a property

const thisSong = {
  description: 'The best song in the world.',
}

// remove the property "description" and add a property called "about" that should say "Just a tribute."

delete thisSong.description

thisSong.about = 'Just a tribute.'

// --------------------------------------
