class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }
  //kabhi kabhi koi humse password or kuch bhi mangta ha..and hume dena nai hota toh-->getter and setter use karsakte ha
  //agar getter likh rahe toh setter toh likhna hi hoga
    get email(){
        return this._email.toUpperCase()  //here we use _ after .--> i.e ._
    }
    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase()//getter kya karta ha..class kr bahar se koi value get karna chahta ha toh uske lia ye getter lagayenge
        // return `${this._password}hitesh`  
    }                                      //lekin koi agar lena chahe password ko toh hum use upper case me convert kardenge..or jo manchahe eahi"abchitesh"..kuch bhi-->taki use real password namile
    set password(value){
        this._password = value //jaha password ka value store karrahe wo ye karrahe 
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.password);
console.log(hitesh.email);