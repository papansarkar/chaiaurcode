// Immediately Invoked Function Expression

/*
sometimes we need to defines functions which needs to get immediately called like when we connect to database,
and also when we need to avoid pollution from golbal function which means we don't need a function to get polluted
by the global variables etc
*/

//iife with normal function

(function chai(name){
    console.log(`${name}, chai is ready to serve...`)
})("Sarkar"); // here adding the ';' is necessary otherwise the iffe function doesn't get closed

// iife with arrow function

((name) => {
    console.log(`${name}, your chai is ready`)
})("Papan");