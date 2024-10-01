const promiseOne = new Promise((resolve, reject) => {
    // Do an async task
    // DB calls, cryptography , newtwork
    setTimeout(()=>{
        console.log('Async task 1 is complete');
        resolve()
    }, 2000)
})

promiseOne.then(()=>{
    console.log("Promise 1 Consumed.")
})


// short-cut
new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Async task 2 is complete");
        resolve()
    }, 2000)
}).then(()=>{
    console.log("Async 2 is reselved")
})


// returning values from resolve to then

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({
            username: "Papan Sarkar",
            address: "Agartala"
        })
    }, 2000)
}) 

promiseThree.then((user)=>{
    console.log(user)
    console.log("Async task 3 is complete")
})

// error checking using catch() and nested then(), finally()

const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const error = false;
        if (!error){
            resolve({
                username: "Conor Mcgregor",
                password: "**********"
            })
        }else{
            reject('ERROR: something went wrong')
        }
    }, 3000)
})

promiseFour
    .then((user)=>{
        console.log(user)
        return user.username
    })
    .then((username)=>{
        console.log(username)
    })
    .catch((err)=>{
        console.log(err)
    })
    .finally(()=>{
        console.log("The promise is either resolved or rejected.");
    })

// console.log(promiseFour); // this prints Promise { <pending> } why?


// using async-await with try-catch instead of then() catch()

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const error = false;
        if(!error){
            resolve({
                username: "Jon Jones",
                profession: "MMA",
            })
        }else{
            reject('ERROR: SOMETHING WENT WRONG')
        }
    }, 2000)
})

const responseFive = async () => {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}

responseFive()


// fetch()

const fetcher = async () => {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(res)
        res = await res.json()

        console.log(res)
    } catch (error) {
        console.log("E: ", error);
    }
}

fetcher()


// fetch() with then()

const fetcherWithThen = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
            .then(
                (res)=>{
                    return res.json()
                }
            )
            .then(
                (json)=>{
                    console.log(json);
                }
            )
            .finally (() => {console.log("The fetcher has kept it's promise.")})
        
    } catch (error) {
        console.log("E: ", error);
    }
}

fetcherWithThen()