// const m = Object.getOwnPropertyDescriptor(Math, "PI")
// // console.log(m);

// const n = {
//     name: 'sam',
//     score: 200
// } 

// console.log(Object.getOwnPropertyDescriptor(n, 'name'));

// const d = Object.defineProperty(n, 'name', {
//     writable: false,
//     enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(n, 'name'));



let math = {}
Object.defineProperty(math, 'PI', {
    value: 3.14,
    writable: true,
    enumerable: true,
    configurable: true

})
console.log(Math.ceil(math.PI));

