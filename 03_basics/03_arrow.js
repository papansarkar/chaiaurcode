const user = {
    username: "sarkar",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website.`)
        // console.log(this) // context checking inside the object function
    }
}

// console.log(user.welcomeMessage); //[Function: welcomeMessage]
// console.log(user["welcomeMessage()"]); //undefined
// console.log(user.welcomeMessage()); // sarkar, welcome to website. undefined


// user.welcomeMessage() //sarkar, welcome to website.

// // use of the 'this' keyword

user.username = "Conor"
// user.welcomeMessage()

// console.log(this) //context checking in global scope in node environment

// function chai(){
//     const username = "hitesh"
//     // console.log(this); // has context
//     console.log(this.username); //undefined
// }
// chai()

// const chai = function (){
//     const username = "hitesh"
//     console.log(this); // has context
//     // console.log(this.username); //undefined
// }
// chai()

// arrow function

// const chai = () => {
//     const username = "hitesh"
//     // console.log(this); // has no context
//     console.log(this.username); //undefined
// }
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(2, 3)); //5



// implicit 
const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(2, 3)); //5

// tricks to remember : { } means return , no { } or only ( num1 + num2 ) means no return keyword

// returning objects from arrow function
const returnObject = () => ({username: "Papan"}) // notice {} is used
// console.log(returnObject());


// implemnting callback

function powerOperations(num, power){
    return power(num)
}

const square = (num) => num**2
const cube = (num) => num**3
const quad = (num) => num**4
const fif = (num) => num**5

const num = 2

const squareer =  powerOperations(num, square)
const cuber =  powerOperations(num, cube)
const quader =  powerOperations(num, quad)
const fiefer =  powerOperations(num, fif)

// console.log(squareer);
// console.log(cuber);
// console.log(quader);
// console.log(fiefer);


//nested callbacks which sometimes become callback hell

function doAdd1(init, callback){
    const result = init + 1
    callback(result)
}

function doAdd2(init, callback){
    const result = init + 2
    callback(result)
}

function doAdd3(init, callback){
    const result = init + 3
    callback(result)
}

function doAll(){
    doAdd1(0, (res1) => {
        doAdd2(res1, (res2) => {
            doAdd3(res2, (res3) => {
                console.log(res3);
            })
        } )
    })
}

// doAll()