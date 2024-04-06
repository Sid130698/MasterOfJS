let score = "Siddharth";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

/*
- score = 33 (number) valueInNumber == 33
- scorer = "33" (string) valueInNumber = 33
- score = true (boolean) valueInNumber = 1
- score = false (boolean) valueInNumber = 0
- score = null (null) valueInNumber = 0
- score = undefined (undefined) valueInNumber = NaN
- score = Symbol("symbol") (symbol) valueInNumber = TypeError: Cannot convert a Symbol value to a number
- score = {key: "value"} (object) valueInNumber = NaN
- score = [1, 2, 3] (array) valueInNumber = NaN
- score = function() { console.log("Hello!"); } (function) valueInNumber = NaN
*/


let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
/*
- isLoggedIn = 1 (number) booleanIsLoggedIn = true
- isLoggedIn = 0 (number) booleanIsLoggedIn = false
- isLoggedIn = "1" (string) booleanIsLoggedIn = true
- isLoggedIn = "" (empty string) booleanIsLoggedIn = false
- isLoggedIn = true (boolean) booleanIsLoggedIn = true
- isLoggedIn = false (boolean) booleanIsLoggedIn = false
- isLoggedIn = null (null) booleanIsLoggedIn = false
- isLoggedIn = undefined (undefined) booleanIsLoggedIn = false
- isLoggedIn = Symbol("symbol") (symbol) booleanIsLoggedIn = true
- isLoggedIn = {key: "value"} (object) booleanIsLoggedIn = true
- isLoggedIn = [1, 2, 3] (array) booleanIsLoggedIn = true
- isLoggedIn = function() { console.log("Hello!"); } (function) booleanIsLoggedIn = true
*/