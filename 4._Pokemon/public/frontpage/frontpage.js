fetch('/api/pokemon')
  .then((response) => response.json())
  .then((result) => console.log(result))

// queryselector traverse 3 træer derfor er getelemenbyID meget mere effektivt
// const pokemonDiv = document.querySelector('#pokemon')
const pokemonDiv = document.getElementById('pokemon')

/*
fetch('/api/pokemon')
  .then((response) => response.json())
  .then((result) => {
    result.data.results.forEach((pokemon) => {
      const pokemonIndividualDiv = document.createElement('div')
      const pokemonNameP = document.createElement('p')
      pokemonNameP.innerText = pokemon.name

      pokemonIndividualDiv.appendChild(pokemonNameP)
      pokemonDiv.appendChild(pokemonIndividualDiv)
    })
  })
*/

// task: write code here that takes the user /battle after 3 seconds

setTimeout(() => {
  // the global context is window
  //location.href = '/battle'
  // suggested method for redirecting
  //location.replace('battle')
}, 3000)
