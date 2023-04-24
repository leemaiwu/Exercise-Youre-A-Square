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


// Alternate Solution

const perfectSq = (n) => {
    return Math.sqrt(n) % 1 === 0
}

console.log(perfectSq(0)) // true
console.log(perfectSq(4)) // true
console.log(perfectSq(-1)) // false
console.log(perfectSq(25)) // true
console.log(perfectSq(26)) // false