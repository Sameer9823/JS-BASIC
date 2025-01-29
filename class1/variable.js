 var accountPassword = "1234"
const accountId = 144553
let accountEmail = "sammerselokar9823@gmail.com"
let accountCity;

// accountId = 2 

 
console.log(accountId);
console.table([accountEmail, accountId, accountPassword, accountCity])

/*
Prefer not to use var
because of issue in block scope and function scope
*/ 

function names(){
    var name = "sammy"
    console.log(name);
}
names()

