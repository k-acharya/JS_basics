let myDate=new Date()
console.log(myDate)
console.log(myDate.toString())

// console.log(typeOf.myDate) //object

let myCreatedDate=new Date(2023,0,23)
console.log(myCreatedDate.toDateString())

let myCreatedDate1=new Date(2023,0,23,5,3)
console.log(myCreatedDate.toLocaleString())

let myCreatedDate2=new Date("01-14-2023")
console.log(myCreatedDate2.toLocaleString())

let myTimeStamp=Date.now() //exact abhi ki date dega
console.log(myTimeStamp)

console.log(myCreatedDate2.getTime())

console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth)
console.log(newDate.getDate)//.....and many out here

console.log(newDate.getMonth()+1)

console.log(newDate.toLocaleString('default',{weekday:"long"}))
