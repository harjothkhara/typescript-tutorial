// TS uses strict types and JS does not
var character = 'mario'; // always be a string
var age = 30; // always be a number
var isBlackBelt = false; // always be a boolean
// character = 20 [NO]
character = 'luigi';
//age = 'yoshi [NO]
age = 40;
//isBlackBelt = 'yes' [NO]
isBlackBelt = true;
// won't compile if wrong type is passed in, cleaner code, less errors
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
