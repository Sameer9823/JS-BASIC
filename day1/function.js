// // // // function sayName(a, b){
// // // //     return a + b
    
// // // // }

// // // // // console.log(sayName(4, 6));
// // // // // // result = sayName(5, 7)
// // // // // // console.log(result);

// // // // // function loginUser(name= "sam"){
// // // // //     if(!name){
// // // // //         console.log('plz enter the username');

        
// // // // //     }
// // // // //     return `${name} just logged in`
// // // // // }
// // // // // console.log(loginUser());


// // // // function calculateCartPrice(...num1){
// // // //     return num1
// // // // }

// // // // console.log(calculateCartPrice(23, 34, 56, 7));



// // // const user = {
// // //     username:"hitesh",
// // //     price: 199
// // // }

// // // function handleObject(object){
// // //     console.log(`username is ${object.username} price ${object.price}`);
    
// // // }
// // // handleObject(user)

// // // const arr = [1,2,3,4,5,6,7,8]

// // // function arry(getarry){
// // //     return `${getarry[2]}`
// // // }
// // // console.log(arry(arr));


// // //arrow functions

// // const userone = {
// //     username: "sameer",
// //     price: 999,

// //     welcomeMessage: function(){
// //         console.log(`${this.username} welcome to webstite`);
// //         // console.log(this);
        
// //     }
    
// // }

// // // userone.welcomeMessage();
// // // userone.username = "geet"
// // // userone.welcomeMessage();
// // // console.log(this);





// // function art(){
// //     let username = 'sameer'
// //     console.log(this);
    
// // }

// // art()






// const artist = (name, categories) => {
//     return name + " " + categories
// }
// console.log(artist("vaish", "sketch"));

// const add = () => ({username: 'sameer'})
// console.log(add());


// const array = [1,2,3,4,5,6,7,8,9]
// array.forEach((e) => console.log(e)
// )

// function o(name){
//     return name
// }
// console.log(o('sameer'));




function fullname(st){
        return this.name + " " + this.lastname + st
    }


const person = {
    name: 'vaishu',
    lastname: 'jhg'
}

// let result = fullname.bind(person)
// console.log(result("ss"));


let val1 = 10;
let val2 = 20;
function add(num1,  num2){
    return num1 + num2
}
const result = add(val1, val2)
const re = add(30, 40)
console.log(result);
console.log(re);

