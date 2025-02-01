class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email(){
    return `email is ${this._email}.in`
  }

  set email(email){
    this._email = email;
  }

  get password() {
    return this._password.toUpperCase();
  }

  set password(password) {
  this._password = password;
  }
}

const sam = new User("sam@gmail.co", "asc2");
console.log(sam.email);
console.log(sam.password);
