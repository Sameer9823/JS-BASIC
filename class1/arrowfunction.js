const sum = (x, y) => x + y;

console.log(sum(2, 3)); // Output: 5

const sum2 = (x, y) => {
    console.log(`Adding ${x} and ${y}`);
    return x * y;
}

const min = (x, y) => ({
    sum: x + y,
    multiply : x * y
})

console.log(min(4, 7)); // Output:

 // Output: Adding  2 and 4

console.log(sum2(2, 4)); // Output: Adding  2 and 4
            // Output: 8

const person = {
    name: "sameer",
    age: 22,
    greet : function(){
        console.log(`Hello, my name is ` + this.name);
    },
    greetTwo : () => {
        console.log(`Hello, my name is  ${this.name}`);
    }
}
person.greet(); // Output: Hello, my name is sameer
                // Uncaught TypeError: person.greet is not a function at <anonymous>:1:1
                // person.greetTwo();</s> Output: Hello, my name is sameer  
person.greetTwo()  // Output: Hello, my name is sameer

function newarr(name){
    this.name=name;
}

const arrow = new newarr('john')
console.log(arrow);

let arrr = (a)=>{
    this.a = a;
}

const er = new arrr('sam')
console.log(er);



