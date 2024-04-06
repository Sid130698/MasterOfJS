const accountId = 144253
let accountEmail = "user@example.com"
var password = "password"
accountCity = "New York"
let accountState;
var accountStateTwo;

//accountId = 23; error message: TypeError: Assignment to constant variable is not allowed             

accountEmail = "userChanged@example.com"
password = "passwordChanged"
accountCity = "New York changed"

console.log(accountId);
console.log(accountEmail);
console.log(password);
console.log(accountCity);

console.table([accountId, accountEmail, accountCity,password,accountState,accountStateTwo])

/*
* what the hell is the let and var and what is the use of any of them if we can directly use the variable like accountCity
* its because the concept of scope { } was not there in the javascript .
* intial days javascript didn't had the concept of scope { }
* var has no scope .... even if u crerate the variable with the same name in the new scope it will refer to the outer scope.
* let is the way to go
*/

// here is the function that will explain the problem.
function example() {
    var varVariable = 1;
    let letVariable = 2;

    if (true) {
        var varVariable = 3; // This will overwrite the outer variable
        let letVariable = 4; // This creates a new variable scoped to this block
        console.log(varVariable); // 3
        console.log(letVariable); // 4
    }

    console.log(varVariable); // 3
    console.log(letVariable); // 2
}

example();
