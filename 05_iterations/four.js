// for...in
// iterate over enumerable properties(key) of an objects


const obj = {
    js: "JavaScript",
    kt: "Kotlin",
    py: "Pyhton"
}

// for (const key in obj) {
//     console.log(`${key} -> ${obj[key]}`);
// }


const programming = ["JS", "Java", "Kotlin", "Rust", "Python", "Go"]

// for (const key in programming){
//     console.log(programming[key]);
// }

const language = new Map()

language.set("Beng", "Bangali")
language.set("Eng", "English")
language.set("Fra", "France")
language.set("Italian", "Italy")
language.set("Hindi", "Indian")


// for (const key in language){
//     console.log(key); //doesn't work because map doesn't have emmurable property 
// }