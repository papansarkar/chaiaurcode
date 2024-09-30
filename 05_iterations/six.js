// filter, 

const coding = ["js", "java", "python", "kotlin", "rust"]

// const values = coding.forEach( (item) => {
//     return item //limitation od forEach()
// } )

// console.log(values); // doesn't work

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numFive = myNums.filter( (item, index, array) => (item > 5) )

// console.log(numFive);

const units = ["kg", "mm", "cm", "ml", "m", "gm"]

const myUnits = units.filter( (unit) => {
    if (unit != "kg" && unit != "gm") {
        return unit
    }
} )

console.log(myUnits);