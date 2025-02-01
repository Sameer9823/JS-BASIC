class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
        
    }

   static createId(){
        return `123`
    }
}

const san = new User("sameer")
console.log(san)

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const nnn = new Teacher('iphone', 'i@gmail.com')
// console.log(nnn.createId());
nnn.logMe()
