// const isUserLoggedIn = true
// const temperature = 57

// if (isUserLoggedIn){
//     console.log("User logged in")
// }

// if ( 2 == "2"){
//     console.log("executed")
// }

// // strictly checking with type too
// if ( 2 === "2"){
//     console.log("executed")
// }

// if ( temperature < 50 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// const score = 200

// if (score > 100){
//     var power = "fly"
//     console.log(`User power: ${power}`)
// }

// power is out of scope here


// const balance = 1000

// implicit sinle line if execution
// if (balance > 500) console.log("test")

// if-else

// if (balance < 500){
//     console.log("balance less than 500");
// }else if(balance < 700){
//     console.log("balance less than 700")
// }else if(balance < 900){
//     console.log("balance less than 700")
// }else{
//     console.log("balance less than 1200")
// }

let isUserLoggedIn = false
const hasDebitCard = true
const loggedInFromEmail = true
const loggedInFromGoogleAuth = false

if (loggedInFromEmail || loggedInFromGoogleAuth){
    console.log("User logged in...")
    isUserLoggedIn = true
}

if (isUserLoggedIn && hasDebitCard){
    console.log("Allow to buy.");
}
