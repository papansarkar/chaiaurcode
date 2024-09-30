// for...of
// iterate over iterable objects

const arr = [1, 2, 3, 4, 5]

// for (const i of arr) {
//     console.log(i)
// }

const greetings = "Hello World!"

// for (const ch of greetings){
//     console.log(ch);
// }

const map1 = new Map()

// a map can have keys of any data type
map1.set(1,"1")
map1.set("a", 2)
map1.set([], "array")
map1.set({a:"b"}, "object")
map1.set("a", 2) // unique key-value

// console.log(map1);
// console.log(map1.size) // easy access to it's length unlike Objects in js

// maps always guarranty original iteration order
map1.set("b", 537)
// console.log(map1);



// +++++++++++ getter  ++++++++++++++

// console.log(map1.get("a"))


// this won't work though
// console.log(map1.get({a:"b"}))

/**
 * the reason above getter is not working is the map uses references for Object keys,
 * meaning two objects with same content will have not follow uniqueness and both will
 * get an entry inside the object with their different references. That's why 
 * console.log(map1.get({a:"b"})) won't work as {a: "b"} refernece is unknown to the map
 * 
 * Example:
 */

const map2 = new Map()

map2.set({a:"b"}, "object")
map2.set({a:"b"}, "object")
map2.set({a:"b"}, "object")
map2.set({a:"b"}, "object")


// console.log(map2)

// solution for object in map as key (getter)

const obj = {a:"b", c: "d"}

// map2.set(obj, "ref obj")
// console.log(map2)
// console.log(map2.get(obj)) 




// ++++++++++++++++++++++++ Loop in map +++++++++++++++++++++

const map3 = new Map()

map3.set('IN', "India")
map3.set('Fr', "France")
map3.set('USA', "United States Of America") 

// for(const value of map3){
//     console.log(value);
// }

// for(const [key] of map3){
//     console.log(key);
// }

for(const [key, value] of map3){ // array destructuring
    console.log(value);
}