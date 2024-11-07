const promise = new Promise((resolve, reject)=>{
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => resolve(data["results"][0]["name"]["first"]))
    .catch(() => reject('SOME ERROR OCCOURED'))
})

promise
    .then(info => {
        console.log(info);
    })
    .catch(error => {
        console.log(error);
        
    })

    

