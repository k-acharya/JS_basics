const descripter = Object.getOwnPropertyDescriptor(Math, "PI") //so yaha hum getOwnPropertyDescriptor help se koi bhi property of object ka dekh sakte ha, yaha humne Math property ka "PI" key ko dekhna ha

console.log(descripter);
//so iske output se pata chalta ha ki pi ka value itna enumerable..non changable ha ki hum nai change kar sakte
//aur yess hum bhi ese kuch hard core value de sakte ha...and wahi hum abhi padhenge

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);
//so ye PI jo ha wo constatnt ha ...change nai hota

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(chai);
//so iski bhi kuch dicrible property ha..and ha toh use kese set karsakta hun

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
//so ab is property ka description mil gaya ha chai object ka..and yye writable ha enumerable ha and configurable bhi ha...matlab changable ha

/*so ab hum kuch property apne se fix karenge and writable false and enumerable bhi false kardia....jese ki hum PI ko change nai karsakte from MATH object weswe hi ,
 ,ab koi other humare chai ke name property ko changr nai kar sakta*/
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// for (let [key, value] of chai) {
//     console.log(`${key} : ${value}`);  //so jab humne esa kia toh isne bola ki ye iteratable nai ha..bcz ye object ha
// }

for (const [key, value] of Object.entries(chai)) {

    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`); //so yaha pe jo function tha wo output me nai dikhega due to if condition
    }
}
