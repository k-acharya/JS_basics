//singleton
//object literals

const jsUser={
    name:"hitesh",
    age:18,
    location:"jaipur",
    email:"hitesh@gmail.com",
    isLoggedIn:false,
    LastLoginDays:["monday","saturday"]
}

console.log(jsUser.email) //here we are using . for object key acces
console.log(jsUser["email"]) //with[""] we are calling objects key

const mysym= Symbol("key1") //symbol
const jsUser1={
    ["mysym"]:"mykey1", //for symbol datatype making we need to take this inside [""]
    name:"hitesh",
    age:18,
    location:"jaipur",
    email:"hitesh@gmail.com",
    isLoggedIn:false,
    LastLoginDays:["monday","saturday"]
}
console.log(jsUser1.mysym)
console.log(jsUser1[mysym])
console.log(typeof jsUser1[mysym])

//singleton object
