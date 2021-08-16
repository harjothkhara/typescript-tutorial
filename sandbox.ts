// TS uses strict types and JS does not
let character = 'mario'; // always be a string
let age = 30; // always be a number
let isBlackBelt = false // always be a boolean

// character = 20 [NO]
character = 'luigi'

//age = 'yoshi [NO]
age = 40

//isBlackBelt = 'yes' [NO]
isBlackBelt = true

// won't compile if wrong type is passed in, cleaner code, less errors
const circ = (diameter: number) => {
  return diameter * Math.PI;
}

console.log(circ(7.5))
