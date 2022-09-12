let visitCounter = 0

export function incrementVisiitorCounter() {
  visitCounter++
  return visitCounter
}

// cant use this in module type syntax.. this belongs to commonjs syntax
/*
module.exports = {
  incrementVisiitorCounter: incrementVisiitorCounter,
}
*/
