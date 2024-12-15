const myArr=[0,1,2,3,4,5]
const myHeros=new Array(1,2,3,4)
console.log(myArr)

//Array methods

myArr.push(6)
myArr.pop()
console.log(myArr)

myArr.unshift(9)
console.log(myArr)

myArr.shift()
console.log(myArr)

//some Q/A kind of
console.log(myArr.includes(9))
console.log(myArr.indexOf(9))

const newArr=myArr.join()
console.log(newArr)
console.log(typeof newArr)

//******************************************** ARRAY FUNCTIONS **********************************************

const marvel_heros=["thor","ironman","spider"]
const dc_heros=["super","flash","batman"]

/*marvel_heros.push(dc_heros)
console.log(marvel_heros) */
//wrong way to try for combinaton

//concat and spread are the good ways

const all_heros= marvel_heros.concat(dc_heros)
console.log(all_heros) //concat

const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros) //spread

//array-->ke andar wala situation

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array= another_array.flat(3) //flat

console.log(real_another_array)

//finding element in array * array bana rahe

console.log(Array.isArray("hitesh")) //isArray
console.log(Array.from("hitesh")) //from

console.log(Array.from({name:"hitesh"})) //interesting

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))