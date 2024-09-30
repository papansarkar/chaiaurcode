// reduce 

const myArray = [1, 2, 3]

const acc = 1

const sumWithInitial = myArray.reduce( (acc, currentVal) => acc + currentVal, acc)

// console.log(sumWithInitial);

const myArray1 = [2, 4, 6, 8]

const sumOfAll = myArray1.reduce( (acc, currentVal) => acc + currentVal, 0)

// console.log(sumOfAll);

const shoppingCart = [
    {
        course: "js course",
        price: 999
    },
    {
        course: "java course",
        price: 2999
    },
    {
        course: "python course",
        price: 1999
    },
    {
        course: "rust course",
        price: 4999
    },
    {
        course: "android course",
        price: 12999
    },
    {
        course: "swift course",
        price: 13999
    },

]
const fixedDiscount = 2000
const priceToPay = shoppingCart.reduce( (acc, course) => acc + course['price'], -2000)

console.log(priceToPay);

