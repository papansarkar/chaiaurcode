const marvel_heroes = ["thor", "ironman", "spiderman"]

const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes)

const allNewHeroes = [...marvel_heroes, ...dc_heroes]

// console.log(allNewHeroes)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array1 = another_array.flat(0)
// const real_another_array2 = another_array.flat(1)
// const real_another_array3 = another_array.flat(Infinity)

// console.table([real_another_array1, real_another_array2, real_another_array3])
// // console.log(real_another_array2)
// // console.log(real_another_array3)


// console.log(Array.isArray("papan"))
// console.log(Array.from("papan"))
// console.log(Array.from({name: "UFC"})) // interesting - key or value not mentioned

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array(score1, score2, score3)); 
console.log(Array.of(score1, score2, score3));