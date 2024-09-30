// singleton
// Object.create


//object literals

const mySym = Symbol("Key1")
// console.log(mySym.description);

const JsUser = {
    name: "Kach",
    "lastname": "Sen",
    [mySym]: "key2",
    age: 10,
    lacation: "Jaipur",
    email: "kach@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondays", "Saturday"]
}

// console.log(JsUser.age);
// console.log(JsUser["age"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);
// // console.log(JsUser.lastname); // not allowed


// JsUser["email"] = "sen@chatgpt.com"
// console.log(JsUser["email"])

// Object.freeze(JsUser) // freezes the object
// JsUser["email"] = "abracadabra@gmail.com" // no error shown but value is unchanged.

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS Users.")
}

// console.log(JsUser.greeting);

// const greetingNew = JsUser.greeting();

// console.log(greetingNew);


JsUser.greeting2 = function(){
    console.log(`Hello ${this.name}`)
}

JsUser.greeting()
JsUser.greeting2()


//An object only allows strings and symbols as keys (non-string keys are coerced into strings).
const obj = {};
obj['stringKey'] = 'value'; // Valid
obj[1] = 'numberValue';      // Coerced to string: "1"
obj[{}] = 'objectValue';     // Coerced to string: "[object Object]"


// objects don't guarranty original iteration order, 
const obj1 = {};
obj1['b'] = 2;
obj1['a'] = 1;
obj1['c'] = 3;

for (const key in obj1) {
  console.log(key, obj1[key]); // Order may vary
}

//To determine the size of an object, you need to use Object.keys() or Object.entries() to count the number of keys.
console.log(Object.keys(obj1).length);
