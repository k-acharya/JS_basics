//our doubt is does function is function or object in js 
function  multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

//so we realise that function in js is--> 1.fxn fxn bhi ha &  2. fxn object ki tarah bhi use kar sakte ha according to need


function createUser(username, score){
     this.username= username,
     this.score = score
}


createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is${this.score}`);     //this ka matlab jisne bhi bulaya usike pass jao
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)  //new keyword nai hota toh ye protype uppar ke implement nai hote isiliya new is important

chai.printMe()   //when we add new infront then it will work 

/*--FUNCTIONALITY OF NEW KEYWORD:

  Here's what happened behind the scenes when the new keyword is used:

  A new object is created: The new keyword initiates the creation of a new javascript object.

  A prototype is linked: The newly created object gets linked to the prototype property of the consstructor function. This
  means that it has access to properties and methods defined on the constructor's prototype.

  The constructor is called: The constructor function is called  with the specified argument and this is bound to the newly 
  created object. If no explicit return value is specified from the constructor, javascript assumes this, the newly created object,
  to be the intended return value.

  The ne object is returned: After the constructor function has been called, if it doesn't return a non-primitive value
  (object, array, function, etc.), the newly created object is returned.

*/