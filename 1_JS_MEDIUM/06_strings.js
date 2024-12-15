let name="hitesh"
let repoCount=50

//console.log(name+repoCount+"value") //bad syntex

//good syntext
console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName= new String('hiteshhe')
console.log(String('hiteshhe'))

console.log(gameName[0])

console.log(gameName.__proto__)

console.log(gameName.length)

console.log(gameName.toUpperCase)

console.log(gameName.charAt(2))

console.log(gameName.indexOf('t'))

const newString=gameName.substring(0,4) //here we cant give -ve
console.log(newString)

const anotherString=gameName.slice(-8,4) //here we can give -ve
console.log(anotherString)

const newStringOne=" hitesh "
console.log(newStringOne)
console.log(newStringOne.trim())

const url="https://hitesh.com/hitesh%20choudhury"
console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))

console.log(gameName.split(''))