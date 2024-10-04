// array

const myArr = [0, 2, 3, 4, 5, 6]

const myHeroes = ["iron man", "batman"]

const myArr2 = new Array(2, 53, 2)

// console.log(myArr[1])

//array methods

myArr.push(
    {
        name: "Papan",
        password: 1234
    }
)
myArr.push(
    ['a', 'b', 'c']
)
// myArr.pop()
// console.log(myArr)

// console.log(myArr[7][0]);


// myArr.unshift(9) // shifts all the element to right, which becomes expensive in terms of processing power
// console.log(myArr)

// myArr.shift() 
// console.log(myArr)
// myArr.shift() 
// console.log(myArr)

// console.log(myArr.includes(5))
// console.log(myArr.indexOf(10))
// console.log(myArr)


const newArr = myArr.join("_")

// console.log(newArr); // 0_2_3_4_5_6_[object Object]_a,b,c 
// notice how it didn't print the elements inside the object but printed the last array items


// console.log(typeof newArr)




// slice, splice

const myn1 = [1, 2, 3, 4, 5, 6]

// console.log("Original array -> ", myn1)

// console.log("slice -> ", myn1.slice(0,3))
// console.log("Original array -> ", myn1)


// console.log("splice -> ", myn1.splice(1,3))
// console.log("Original array -> ", myn1)
