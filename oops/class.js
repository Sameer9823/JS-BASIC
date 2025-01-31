const user = {
  username: "sameer",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from database");
    // console.log(`${this.username}`);
    // console.log(this);
  },
};

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function(){
    console.log(`welocome ${this.username}`);
    
  }
 
}

const userOne = new User("sameer", 12, true);
const userTwo = new User("vaish", 11, false);
// console.log(userOne instanceof User);
// console.log(userTwo);
