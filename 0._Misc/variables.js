'use strict'

// Never EVER do this!!! - According to the teacher
// totalGlobalVariable = 'Malthe'
// var globalVariable = 'Malthe'

// Variable declaration
const me = {
  name: 'Anders',
}

{
  let someValue = true
  {
    let someValue = false
  }
  //console.log(someValue)
}

{
  var someValue = true
  {
    var someValue = false
  }
  //console.log(someValue)
}

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    //console.log(i)
  }, 1000)
}
