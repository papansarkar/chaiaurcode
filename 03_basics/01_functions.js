function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}

// addTwoNumbers(1,2)

function addTwoNumbers1(num1, num2){
    let result = num1 + num2
    return result
}

// console.log(addTwoNumbers1(1,2));

function calculateCartPrice(...num){
    return num
}

// console.log(calculateCartPrice(100, 200, 300))

function calculateCartPrice1(val1, val2, ...num){
    return num
}

// console.log(calculateCartPrice1(1, 2, 555, 888))

// handling objects in functions

const user = {
    username: "Sarkar",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
// handleObject({
//     username: "Conor",
//     price: 299
// })