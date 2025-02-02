const a = new Array(1, 2, 3, 4, 5);
const [b,c,d,e,t] = a
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(t);

const z = new Object({name: "sameer", age: 23, email: "sam@gmail.com"})
const {name:v, age, email} = z
console.log(v);
console.log(age);
console.log(email);


const obj = {
    name: "sameer",
    age: 23,
    email: "sam@gmail.com",
    fullname: {
        lastname: "selokar",
        address: "mumbai"
    }
}
const {name, age: m, fullname: {lastname, address}} = obj
console.log(name);
console.log(m);
console.log(lastname);
console.log(address);