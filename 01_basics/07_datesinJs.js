// Dates

let myDate = new Date()
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.getDate())

// let myCreatedDate = new Date(1994, 11, 25)
// let myCreatedDate = new Date(1994, 11, 25, 5, 3)
let myCreatedDate = new Date("2022-01-31")
// console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime()) //mili-second
// console.log(Math.floor(Date.now()/1000)) //in seconds


let newDate = new Date()

// console.log(newDate.getMonth())
// console.log(newDate.getMonth() + 1)

let updatedDate = newDate.toLocaleString('default', {
    weekday: "short",
})

console.log(updatedDate)