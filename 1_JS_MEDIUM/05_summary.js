//primitive datatype
//7 types: Strings,Numbers, Boolean, null, undefined, Symbol, BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=10.3
const outsideTemp=null
let userEmail;

const id= Symbol('123')
const anotherId= Symbol('123')

console.log(id === anotherId)

const bigNumber = 897654324168934n

//Reference (Non primitive)
//Array, Objects, Functions

const heros=["shaktiman","bhim","goga"] //Array

let myobj={             
    name:"hitesh",            //Objects
    age:22
}

const myfunctions= function(){
    console.log("hello world")
}

console.log(typeof myfunctions)


//+++++++++++++++++++++++++++++++ MEMORY +++++++++++++++++++++++++++++++++++

//Stack (primitive) , Heap (Non-primitive)

let myYoutubeName= "hiteshcoudhuridotcom" // primitive so--->  stack me jayega

let anothername= myYoutubeName
anothername="chaiaurcode"

console.log(myYoutubeName)
console.log(anothername)

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo= userOne

userTwo.email = "hitesh.com"

console.log(userOne.email)
console.log(userTwo.email)