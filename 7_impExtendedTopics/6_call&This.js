function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    //SetUsername(username) _____// ye actually me call ho hi nai raha isiliya nai aya
    // this.username = username,
    SetUsername.call(this, username) /*ye apna wala nai hamaa dia wala this use karega jisse ki execution context ache se horaha and hamara 
      function call and execute bhi horaha....ye this hum call me de sakte ha*/

    this.email = email,
    this.password = password
}

const chai = new createUser("chai", "chai@facebook", "123")
console.log(chai);