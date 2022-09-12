const barbieMovies = [
  { name: 'Swan Lake', year: 2001 },
  { name: 'Princess and the Pauper', year: 2008 },
  { name: 'Fairies', year: 2014 },
]

// forEach
// map, reduce, filter

// Rate the movies
const ratedBarbieMovies = barbieMovies.map((movie) => {
  movie.rating = Math.floor(Math.random() * 10) + 1
  return movie
})
console.log(ratedBarbieMovies)

// Første løsning aka mine
/*
barbieMovies.map((movies) => (movies.rating = Math.floor(Math.random() * 10)) + 1)
console.log(barbieMovies)
*/

// Movies more recent than 2005
const recentBarbieMovies = barbieMovies.filter((movies) => movies.year > 2005)
console.log(recentBarbieMovies)

/* Loop Advice
Only use for loops if you are doing "finger counting".
I.E: counting to a number

Dont use enhanced for loops

Only use forEach if if you are doing something and dont care about the results
I.E. populationg the DOM with elements

Always prefer functional loop methods such as:
map, filter and reduce

Map for mapping 1:1
Filter for tiltering the array
Reduce to reducing the content of the array
*/
