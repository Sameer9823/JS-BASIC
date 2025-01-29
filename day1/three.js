// // const mySym = Symbol("key1")


// // const obj = {
// //     name: 'John',
// //     age: 30,
// //     [mySym]: "key1",
// //     city: 'New York',
// //     country: 'USA',

// // }
// // // console.log(obj);

// // obj.city = 'Los Angeles';

// // // console.log(obj['name']);
// // // console.log(typeof obj[mySym]);

// // // Object.freeze(obj);
// // obj.name = 'sam';
// // // console.log(obj);

// // obj.greeting = function () {
// //     console.log("hello world!");
// // }
// // obj.greetingTwo = function () {
// //     console.log(`greeting ${this.name}`);
// // }
// // console.log(obj.greeting());
// // console.log(obj.greetingTwo());

// //singleton 

// const tenderUser = new Object()
// // console.log(tenderUser);

// tenderUser.id = 'tender';
// tenderUser.name = 'sammy';
// tenderUser.login = false;

// console.log(tenderUser);


// const regulrUser = {
//     name: 'sameer',
//     fullName:{
//         username:{
//             firstname: 'John',
//             lastname: 'Smith',
//         }
//     }
// }
// console.log(regulrUser.fullName.username.firstname);
// console.log(regulrUser.fullName.username.lastname);
// console.log(regulrUser.fullName);

// let onj = {
//     1:'one',
//     2:"two",
//     3:"three"
// }
// let on = {
//     4:'one',
//     5:"two",
//     6:"three"
// }

// console.log({...onj, ...on});

// console.log(Object.entries(onj));
// console.log(Object.values(onj));


// console.log(on.hasOwnProperty('4'));


//destructuring

const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "hitesh sir"
}

const {coursename, price} = course
console.log(price);
console.log(coursename);



//API


let numbers = new Set([1,2,3,3,4,5,6,7,8,9,10])
console.log(numbers);

let m = new Map()
m.set('name', 'sameer')
m.set('age', 30)
console.log(m);



