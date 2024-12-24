// *****************1st. OBJECT LITERAL...just literally ak object banao
const user = {
   username: "hitesh",
   loginCount: 8,
   signedIn: true,

   getUserDetails: function(){
    // console.log("Got user details from database");
    // console.log(`username: ${this.username}`);
    console.log(this);
   }
}

console.log(user.username);
//console.log(user.getUserDetails());
console.log(this); //global context


//***************2nd. Constructor function dekhte ha--> ye kya karraha, kiu karraha....
//constructor function jo ha hamesha ak naya copy dedeta ha..wo apke hawale ha jo likhna ha...original copy or dusre usse effect nai hota ha
// const promiseOne = new Promise()
// const date = new Date()

function User2(username, loginCount, isLoggedIn){
    this.username= username,
    this.loginCount= loginCount,
    this.isLoggedIn= isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    return this
}
//yaha pe over write ho raha tha:
// const userOne = User("hitesh", 12, true)
// const UserTwo = User("chaiaurcode", 11, false)

//but abhi new keyword use kia toh over write nai hoga...do different object banenge
const userOne = new User2("hitesh", 12, true)
const UserTwo = new User2("chaiaurcode", 11, false)
console.log(userOne);
console.log(UserTwo);
//toh constructor apko hamesha naya instruct deta ha
// new keyword ka yehi importance dekha-->wo over write hone nai deta...completely new separate deta ha jo individual ha..


/* ***************new keyword:
  1.first ak "empty new object create hota ha(jisko "instans" kaha jata ha)
  2.second me apka ak "constuctor function call" hota ha new keyword ke karan
  3.apka jo "this keyword" ha jo vi apne arguments wagera likha ha wo "inject" ho jata ha
  4.apko miljata ha function ke andar */
