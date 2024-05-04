const name = "Siddharth";
const repoCount = 50;

console.log("Hello my name is " + name + " and my repo count is " + repoCount); // String concatenation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // String Interpolation

// Declaring string using constructor
const myName = new String("Siddharth");

console.log(myName.toUpperCase()); // Output: "SIDDHARTH" (Converts the string to uppercase)
console.log(myName.toLowerCase()); // Output: "siddharth" (Converts the string to lowercase)
console.log(myName.charAt(0)); // Output: "S" (Returns the character at index 0)
console.log(myName.indexOf("t")); // Output: 6 (Returns the index of the first occurrence of "t")
console.log(myName.lastIndexOf("t")); // Output: 8 (Returns the index of the last occurrence of "t")
console.log(myName.includes("id")); // Output: true (Checks if the string contains "id")
console.log(myName.startsWith("Sid")); // Output: true (Checks if the string starts with "Sid")
console.log(myName.endsWith("rth")); // Output: true (Checks if the string ends with "rth")
console.log(myName.slice(1, 4)); // Output: "idd" (Extracts a section of the string)
console.log(myName.substring(2, 4)); // Output: "dd" (Extracts a section of the string)
console.log(myName.substr(2, 4)); // Output: "iddh" (Extracts a specified number of characters from a start position)
console.log(myName.replace("Siddharth", "John")); // Output: "John" (Replaces "Siddharth" with "John")
console.log(myName.trim()); // Output: "Siddharth" (Removes whitespace from both ends of the string)
console.log(myName.concat(" Singh")); // Output: "Siddharth Singh" (Concatenates two or more strings)
console.log(myName.split("")); // Output: ["S", "i", "d", "d", "h", "a", "r", "t", "h"] (Splits the string into an array of substrings)
console.log(myName.length); // Output: 9 (Returns the length of the string)


const newString  = myName.substring(-8, 4);
console.log(newString); // Output: Sidd
const anotherString = myName.slice(-9,4);
console.log(anotherString); // Output: