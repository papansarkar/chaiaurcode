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
