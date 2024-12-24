class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    
    addCourse(){
        console.log(`Anew course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@google.com", "123")

chai.addCourse()

const masalaChai = new User("masalaChai")

masalaChai.logMe()

// console.log(chai === masalaChai)....false
// console.log(chai === Teacher);.....false

console.log(chai instanceof Teacher);
console.log(chai instanceof User);