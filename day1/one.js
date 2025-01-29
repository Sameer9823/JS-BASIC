
let name = "sameer"

let age = 18;

let isLoggedIn = false;

// number => 2 to power 34
// bigint
// string
// boolean
// undefined  it has the type
// null standalone valuse it has the type object
// symbol uniqueness values


// object 
// function

// console.log(typeof undefined)


// type conversion in js

let score = "33"

let number = Number(score)

// console.log(number);

// "33" => 33
// "44advertise" => NaN

let iLogged = ""

let booloean = Boolean(iLogged)

// console.log(booloean)

let some = 44

let someStr = String(some)

// console.log(typeof someStr)

///********* operation *********** */

let value = 5
let negative = -value

// console.log(negative);


let str1 = "sam"
let str2 = "eer"

let concat = str1 + str2

// console.log(concat);

console.log("2" + 3);

// prefix and postfix
// comparison function


//primitive call by value
// non primitive call by reference

//stack(primitive) and heap(non primitive)


let myStack = "fjfhcdgfdgf"

let another = myStack 
another = "tfhdd"

console.log(another);

console.log(myStack);

let sm = {
    name: "sam",
    age: 20
}

let other = sm

other.name = "john"

console.log(sm);
console.log(other);


//string

const nn = "ndsknskg"
const ee = 50

console.log(`name: ${nn.toUpperCase()} age: ${ee}`);
console.log(nn.length);
console.log(nn[7]);
console.log(nn.__proto__);
console.log(nn.charAt(2));
console.log(nn.indexOf('s'));

const nhw = nn.substring(0, 4)
console.log(nhw)

const nnn = "  hhjhj  "
console.log(nnn);

console.log(nnn.trim())


const url = "https://localhost.com/sameer%20"
console.log(url.replace('%20', '-'))



const a = ['a', 'b', 'c', ]
console.log(a.join('-'));








