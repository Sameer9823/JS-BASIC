const userEmail = "s@gmail.com"

if (userEmail) {
    console.log("Got userEmail");
} else {
    console.log("Don't have user email");
    
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("empty object");
    
}

// nullish coalescing operator(??) : null unidefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 55

console.log(val1);


//ternary operator

const a = 6;
a > 4 ? console.log("true")
 : console.log("fsdhg");
 ;