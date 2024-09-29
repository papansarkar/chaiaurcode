function username(){
    let name = "Sarkar"
    // variable city is not accessible here
    function profile(){
        let city = "Agartala"
        console.log(`Your name is ${name} and live in ${city}`);
    }
    profile()
}

// variable name is not accessible here (this is the global scope)
username()
console.log(this); // this has access to the current context , like here in global scope

// 'this' keyword

/*
'this' keyword is context dependent, it has different context depending on environment like node, v8 in browser
*/