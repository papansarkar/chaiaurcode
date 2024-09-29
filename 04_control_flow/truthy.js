/*
falsy values:

false, 0, -0, BigInt 0n, "", null , undefined , NaN

*/


/*
truthy values: 
All except the above are truthy...though there are some tricks

"0", 'false', 'true', " " etc all strings are truthy

function(){ } is also a truthy

[], {} truthy

*/


const userEmail = "sarkar@gmail.com"

if(userEmail){
    console.log("got user email");
}else{
    console.log("don't have user email");
}

const arr = []

if(arr.length === 0) {
    console.log("array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10

let val2 = null ?? 12

console.log(val1);
console.log(val2);

console.log(undefined ?? 12)
console.log(null ?? 10 ?? 20)
console.log(null ?? undefined ?? 20)


// Terniary Operator

// Syntax : condition ? true : false

const iceTeaPrice = 120

const result = iceTeaPrice > 100 ? "Costly" : "Fair Price"

console.log(result);