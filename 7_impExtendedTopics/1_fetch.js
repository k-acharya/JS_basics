//fetch kese kam karte ha
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))

//go to website LogRocket: ARTICLE--> *THE FETCH API IS FINALLY COMING TO Node.js*
//documentation of fetch in MDN
//theory on copy 