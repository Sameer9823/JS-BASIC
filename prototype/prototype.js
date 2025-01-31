// function multiply(num){
//     return num * 5
// }

// multiply.power = 2
// console.log(multiply(5));
// console.log(multiply.power);
// console.log(multiply.prototype);


// function createUser(username, score){
//     this.username = username
//     this.score = score 
// }

// createUser.prototype.increment = function(){
//     this.score++
// }
// createUser.prototype.printMe = function(){
//     console.log(`score is ${this.score}`);
    
// }
// const chai = new createUser("chai", 25)
// const tea = new createUser("tea", 250)
// chai.printMe()
// tea.printMe()


//***************************      ********************************** */

// let myName = 'sameer   '

// console.log(myName.truelength);

let myHeros = ["thor", "spiderman", "captain"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.sameer = function(){
    console.log("kwmmmnnnnn");
    
}
Array.prototype.sam = function(){
    console.log("ksgkdjsn");
    
}
// heroPower.sameer()
// myHeros.sameer()
myHeros.sam()
// heroPower.sam()


// inheritance

const User = {
    name: "sameer",
    email: "sam@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

// Teacher.__proto__ = User


//modern syntax

Object.setPrototypeOf(Teacher, TeachingSupport)

let myName = 'sameer   '

String.prototype.truelength = function() {
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
    
    
}

myName.truelength()
"vaish  ".truelength()
"dost  ".truelength()