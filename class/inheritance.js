class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`a new course was added by ${this.username}`);
        
    }
}

const tea = new Teacher("sameer", "sam@gmail.com", '123')
tea.addCourse()

const sam = new User('vaish')
sam.logMe()