const accountId=14445
let accoutntEmail="acharyakaberi0@gmail.com"
var accountPassword="12234"
accountCity="jaipur"
let accountState
//agar js me koi variable declare karke value put nai kia toh wo {undefine} hoti ha

/*prefer not to use var 
because of issue in block scope and functional scope*/

//accountId=2 //not allowed to chage the value of {const}

accoutntEmail="kaberi9.com"
accountPassword="565656"
accountCity="banglore"

console.log(accountId)

//or there is this shortcut

console.table([accountId,accoutntEmail,accountPassword,accountCity,accountState])

/*if you forget then to run type--->
(node 01_variables.js) just do this kind */



