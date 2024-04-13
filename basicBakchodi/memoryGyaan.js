// Stack memory is used in primitive types
// heap is used in non-primitive types

// stack memory gives a copy of the variable
// heap gives a reference to the variable.
 let myName = "Siddharth Singh";
 console.log(myName);
 let anotherName = myName;
 console.log(anotherName);
 anotherName = "Siddhartrh Singh Rathore";
 console.log(anotherName , myName);
 console.table([anotherName , myName]);

 let userOne = {
    name: "Siddharth",
    email: "siddharth@gmail.com"
 };

 let userTwo = userOne;
 console.table([userOne , userTwo]);
 userTwo.name = "Siddharth Singh Rathore";
 console.table([userOne , userTwo]);