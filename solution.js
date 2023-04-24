var isSquare = function(n) {
  if (Math.sqrt(n) === Math.floor(Math.sqrt(n)) || n === 0) {
    return true
  } else {
    return false
  }
}

console.log(isSquare(0)) // true
console.log(isSquare(4)) // true
console.log(isSquare(-1)) // false
console.log(isSquare(25)) // true
console.log(isSquare(26)) // false
