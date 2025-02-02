class User{
    constructor(username, email){
        this.username = username;
        this.email = email;
    }

    get username(){
        return `username is ${this._username}sss`
    }
    set username(username){
        this._username = username

    }

    get email(){
        return `email is ${this._email}.in`
    }

    set email(email){
        this._email = email
    }
}

const n = new User('sameer', 'sam@gmail.co')
console.log(n.username);
console.log(n.email);

