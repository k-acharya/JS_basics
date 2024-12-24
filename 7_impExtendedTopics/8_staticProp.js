class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`);
    }

    static createId(){   //isse iska access humne rok dia
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId()) ....ab ye kam nai karega bcz humne static kardia tha 


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "ip@one.com")
iphone.logMe()
// concole.log(iphone.createId());...static likhne ki wajah se