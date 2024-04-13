// #primitive dataTypes
// 7 types : string,Number ,Boolean , null, undefined , Symbol , BigInt, 
// # Refrence types : Non primitive types
// Array, Objects , Functions , 
 const score = 100 ;
 const scoreValue = 100.3;
 const isLoggedIn = false;
 const outsideTemp = null;
 let userEmail;
  const id = Symbol('123');
  const anotherId = Symbol('123');
  console.log(id===anotherId);
  const myNumber = 80045350307004535n;
  console.log(myNumber);
  const heros =["Spider-Man","Hulk","Iron-Man","Thor"];
  let myObj = {
    name: "Siddharth",
    Age : 24,
  }
  const myFunction = function(){
    console.log(heros);
    console.log(typeof myNumber);
    console.log(typeof myFunction);
    console.log(typeof myObj);
  }
  myFunction();