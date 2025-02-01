function setUsername(username){
    this.username = username
    // console.log("call");
    
}

function createUser(username, email, password){
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const sam = new createUser('sameer', 'sam@gmail.com', '123')
console.log(sam);
