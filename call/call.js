function setUsername(username) {
  this.username = username;
  // console.log("call");
}

function createUser(username, email, password) {
  setUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const sam = new createUser("sameer", "sam@gmail.com", "123");
console.log(sam);

//call

const obj = {
  name: "sameer",
  age: 23,

  fullname: function (lastname) {
    console.log(this.name + " " + lastname);
  },
};

const ob = {
  name: "vaish",
};

const person = obj.fullname.call(ob, "djhfj");
person;

//apply

function login(email) {
  console.log(`this is ${this.username} and ${this.password} and ${email}`);
}

let person1 = { username: "sameer", password: "123" };
let person2 = { username: "V", password: "123" };
const person3 = { username: "S", password: "123" };
login.apply(person1, ["sam@gmail.com"]);
login.apply(person2, ["V@gmail.com"]);
const result = login.bind(person3, "s@gmail.com");
result();

//bind

let sams = {
  name: "sameer",
  age: 23,
  id: 123,
};
// for (const key of Object.entries(sams)){
//     console.log(`${key[0]}: ${key[1]}`);

// }

for (const key in sams) {
  console.log(`${key}: ${sams[key]}`);
}

console.log(Object.hasOwn(sams, 'name'));
console.log(Object.getOwnPropertyDescriptor(sams, 'name'));
console.log(Object.getOwnPropertyNames(sams));

const m = {}
Object.defineProperty(m, 'PI', {
    value: 3.14,
    writable: true,
    enumerable: true,
    configurable: true
})
console.log(Math.floor(m.PI));



