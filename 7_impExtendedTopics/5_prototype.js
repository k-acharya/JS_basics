//purely prototype what is it..
//prev one was for understanding new keyword lowkey it was turned out

// 27:04--48:07___video[43/51]_______prototype wala section start hua

// let myName = "hitesh"
let myName = "hitesh   "
// console.log(myName.length);.....ye toh 11 hi dega space count karke...but we want something like true length
console.log(myName.trueLength);
//so we need to create this type of method truLength which donot count space and all..just real letters it count

let  myHero = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    //aur ab apko ak method agar define karni ha toh wo kese kar sakte ha
    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

heroPower.hitesh()

/*theory ke hisab se sab object se hote hua jata ha...so myHero array ke passs bhi ye hitesh prototype hona chahiya jo
 humne inject kia tha badme */

 myHero.hitesh() //yes this present in myHero array

 // dekho Object me inject kia toh bydefault -->array me wo property add ho gayi
 // but kya array wo property add karne se-->object me inject hota ha?

 Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
 }

 myHero.heyHitesh() //so han array me toh inject hogaya and heyHitesh ka access mil gaya

 //heroPower.heyHitesh()
  //but object me ye inject nai hua...bcz down the line niche wale ko access dedia ha toh uppar wala thodina le payega

 /* object-> // but object ka injection down the chain sabhi me array,string...blalala me jayega
    .
    .
    array*/  // so array ka injection object ma nai jayega


//*****-----inheritance-----******** */

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport   //istarike se hum connect kar sakte ha objects ko apas me 
}

Teacher.__proto__ = User  //toh yehi inheritant ha ki kese app kisi aur ki property ko access karsakte ho

//modern syntax: sidha approach karo apne object ko
Object.setPrototypeOf(TeachingSupport, Teacher) //toh yaha tecahingsupport jo ha wo sari property access kar raha ha teacher ki



//so at the beginning our problem was TRUELENGTH so lets solve that:-->
let anotherUsername = "chaiaurcode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()