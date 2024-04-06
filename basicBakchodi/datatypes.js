"use strict";/*
  "use strict"; 

  - Enables strict mode in JavaScript.
  - Makes coding rules stricter.
  - Helps catch common errors.
  - Makes code more reliable.

  Strict Mode Rules:
  - Requires declaring variables before use.
  - Prevents assigning values to read-only properties.
  - Disallows deleting undeletable properties or variables.
  - Requires unique names for function parameters.
  - Prohibits the use of the 'with' statement.
  - Prevents the use of octal numeric literals.
  - Treats 'eval' and 'arguments' as keywords.
*/

//alert("Hello, world!"); This line of code attempts to display a pop-up message using the "alert" function. However, it results in an error because "alert" is not defined in Node.js environment, which doesn't have the DOM (Document Object Model) like web browsers do.


let name = "Siddharth"; // This variable holds a text string.

let age = 25; // This variable holds a whole number, also called an integer.

let isLoggedIn = false; // This variable holds a value that can be either true or false.

// In JavaScript, we have different types of values:
// - Numbers: These can be whole numbers (integers) or numbers with decimal points.
// - BigInt: Used for very large numbers beyond what regular numbers can handle.
// - Strings: Text surrounded by quotation marks, either single (') or double (").
// - Booleans: Values representing true or false.
// - null: Represents an explicitly empty value, indicating the absence of any value.
// - undefined: Represents a variable that has been declared but not yet assigned a value.
// - Symbol: Represents a unique and immutable data type, often used as an identifier for object properties.
// - Object: Used to store collections of key-value pairs.
// - Function: Represents executable code blocks that can be assigned to variables, passed as arguments, and returned from other functions.
// - Array: Special objects used for storing ordered collections of data.

let salary = null; // Example of using null: Represents an explicitly empty value for the salary variable.

let address; // Example of undefined: The address variable is declared but not yet assigned a value, so it's undefined.

// Variables for different data types
let numberVar = 42;
let stringVar = "Hello, world!";
let booleanVar = true;
let nullVar = null;
let undefinedVar;
let symbolVar = Symbol("foo");
let objectVar = { key: "value" };
let arrayVar = [1, 2, 3];
let functionVar = function() { console.log("Hello from function!"); };

// Printing types of variables
console.log(typeof numberVar);   // Output: number
console.log(typeof stringVar);   // Output: string
console.log(typeof booleanVar);  // Output: boolean
console.log(typeof nullVar);     // Output: object (a known quirk in JavaScript)
console.log(typeof undefinedVar);// Output: undefined
console.log(typeof symbolVar);   // Output: symbol
console.log(typeof objectVar);   // Output: object
console.log(typeof arrayVar);    // Output: object (arrays are objects in JavaScript)
console.log(typeof functionVar); // Output: function

// Arrays in JavaScript are a type of object.
// They are specialized objects designed to hold ordered collections of data.

// Here's an example of an array:
let myArray = [1, 2, 3, 4, 5];

// Arrays can have numeric keys, which correspond to the indices of their elements.
// For example, myArray[0] refers to the first element of the array.

console.log(myArray[0]); // Output: 1 (Accessing the first element of the array)

// Arrays inherit properties and methods from the Array prototype object.
// This means they have built-in functionality for common array operations.

// For example, we can use the push() method to add elements to the end of the array:
myArray.push(6);
console.log(myArray); // Output: [1, 2, 3, 4, 5, 6]

// Similarly, we can use other methods like pop(), shift(), unshift(), slice(), etc.
// These methods provide convenient ways to manipulate array elements.

// Despite being a type of object, arrays have additional behaviors and functionality
// specific to handling ordered collections of data, making them very useful in JavaScript.
