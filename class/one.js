// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword(){
//     return `${this.password}asd`
//   }

//   changeUserName(){
//     return `${this.username.toUpperCase()}`
//   }

 

// }

// const sam = new User('sameer', 'sam@gmail.com', 12344)
// console.log(sam.encryptPassword());
// console.log(sam.changeUserName());
// console.log(sam);


function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}kjk`

}

const vai = new User('sameer', 'kjdnbfk', 1234)
console.log(vai.encryptPassword());
console.log(vai);

