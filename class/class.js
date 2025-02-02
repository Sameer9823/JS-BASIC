class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  static print() {
    return `the username is and email is`;
  }
}
class Sam extends User {
  constructor(username, email, address) {
    super(username, email);
    this.address = address;
  }
  p() {
    return `The username is ${this.username} and email is ${this.email} and address is ${this.address}`;
  }
}

const a = new Sam("sameer", "sam@gmail.com", "ghgcghc");
console.log(User.print());


console.log(a.p());
