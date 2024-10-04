// array

const marvel_heroes = ["thor", "ironman", "spiderman"]

const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes[2] = "Ant-Man" //replaces the item at position 3
// marvel_heroes[8] = "Venom" // creates empty items in-between the last item and 8th
// marvel_heroes.push(dc_heroes) // inserts another array

// console.log(marvel_heroes)

// const allHeroes = marvel_heroes.concat(dc_heroes) // returns new array
// console.log(allHeroes)

// const allNewHeroes = [...marvel_heroes, ...dc_heroes] // this is also a concat, returns new array

// console.log(allNewHeroes)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array1 = another_array.flat(0) // concatenates with the specified depth, 0
const real_another_array2 = another_array.flat(1) // concatenates with the specified depth, 1
const real_another_array3 = another_array.flat(Infinity) // concatenates with the specified depth, all

// console.table([real_another_array1, real_another_array2, real_another_array3])
// console.log(real_another_array2)
// console.log(real_another_array3)


console.log(Array.isArray("papan")) // condition to check if Array, returns true or false
console.log(Array.from("papan")) // creates an array from any iterable object
console.log(Array.from({name: "UFC"})) // interesting - key or value not mentioned

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array(score1, score2, score3)); 
// console.log(Array.of(score1, score2, score3));