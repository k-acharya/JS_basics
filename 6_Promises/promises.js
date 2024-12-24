/* fetch('https://something.com').then().catch().finally()...normallly koi bolega 
   --response ayega to->.then()..me ajayega
   --agar koi error hoga toh->.catch()..meajayega
   --aur acha tutorial bolega ki->finally()..me sabkuch ajata ha..aur funally toh run hota hi hota ha*/
//but ese run nai hota ha**********actually promises ko consume karne se pehle apko samajhna padega-->
//ki promises ko actually consume nai banaya kese jata ha

//**********toh abhi kayi tarah ke promises banayenge*************

//jese array object banate the *new array* karke wese hi promise bana sakte ha kind of **object** hi ha
//promis()->apne me **call back** leta ha....and ye call **back hell** se bhi bachata ha

const promiseOne = new Promise(function(resolve, reject){    
    //Do an async task
    //Data Base calls, cryptography, networkcall...
    setTimeout(function(){
        console.log('async task is complete');
        resolve() //abb connect hoga .then() se
    },1000)
}) 

//now lets consume promise

//resolve--> ka connection ha .then() ke sath
promiseOne.then(function(){
    console.log("promise consumed");
}) 



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("async 2 resolved");
}) //1,2.. second bad jabhi ye eventually complete hoga ...toh jab sara kam hojayega toh ye --**resolve inform**-- kardega automatically



const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
         resolve({username:"chai", email:"chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "hitesh", password: "123"}) //agar error nai ha toh resolve kardia object ko
        }else{
            reject('ERROR: something went wrong') //rejection jo ha error deta ha
        }
    }, 1000)
})

const username =  promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("the promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javaScript", password: "123"}) //agar error nai ha toh resolve kardia object ko
        }else{
            reject('ERROR: JS went wrong') //rejection jo ha error deta ha
        }
    }, 1000)
});


//we gonna use --**.asyncAwait**---

async function consumePromiseFive(){
   try{
    const response = await promiseFive
    console.log(response);
   }catch(error){
    console.log(error);
   }
}

consumePromiseFive()


async function getAllUsers(){
   try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
   }catch{
    console.log("E:", error);
   }
}

getAllUsers()

//or we can do fecth also

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))