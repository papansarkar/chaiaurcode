
const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "test@gmail.com",
    fullname: {
        userfullname: "hitesh",
        lastname: "sarkar"
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);

/* ****************** */

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {3: "c", 4: "d"}

const finalObj = Object.assign(obj1, obj2)

// console.log(finalObj);
// console.log(obj1);
// console.log(obj2);
// console.log(obj1 === finalObj);

/* ______________________ */

const target = {1: "a", 2: "b", 3: "c", 0: {9: "x", 8: "y"}}
const source = {3: "c", 4: "d"}

const finalObj1 = Object.assign({}, target, source)

// console.log(finalObj1);
// console.log(target);
// console.log(source);
// console.log(target === finalObj1);

target[1] = "x"

// // console.log(target);
// // console.log(finalObj1);

finalObj1[0][9] = "z"
// console.log(target); // both value of has changed
// console.log(finalObj1);
// console.log(target === finalObj1);




// deep clone

const obj3 = {1: "a", 2: "b", 3: "c", 0: {7: "x", 8: "y", 9: "z"}}
const obj4 = {3: "a", 4: "b", 5: "c"}

const obj5 = structuredClone(Object.assign({}, obj3, obj4))

// // console.log(obj5);

obj5[0][7] = "abc"

// console.log(obj3);
// console.log(obj5);

// console.log(obj3 === obj5);



// using spread operator

const obj6 = {1: "a", 2: "b", 3: "c", 0: {7: "x", 8: "y", 9: "z"}}
const obj7 = {3: "a", 4: "b", 5: "c"}

const obj8 = {...obj6, ...obj7}


// console.log(obj6);
// console.log(obj7);
// console.log(obj8);

// obj8[1] = "x"

// console.log(obj6);
// console.log(obj7);
// console.log(obj8);

obj8[0][7] = "abc"  // proof : that above method is still not a deep copy

// console.log(obj6); // value changed here too
// console.log(obj7);
// console.log(obj8); 

const tinderUser1 = new Object()

tinderUser1.id = "123abc"
tinderUser1.name = "Sammy"
tinderUser1.email = "test@gmail.com"
tinderUser1.isLoggedIn = false


const regularUser1 = {
    email: "test@gmail.com",
    fullname: {
        userfullname: "hitesh",
        lastname: "sarkar"
    }
}

// console.log(Object.keys(tinderUser1)); // returns array
// console.log(Object.keys(regularUser1)); // returns array

// console.log(Object.values(tinderUser1)); // returns array
// console.log(Object.values(regularUser1)); // returns array

// console.log(Object.entries(tinderUser1)); // returns array - not very useful
// console.log(Object.entries(regularUser1)); // returns array

// console.log(tinderUser1.hasOwnProperty("isLoggedIn"));
// console.log(regularUser1.hasOwnProperty("fullname"));
// console.log(regularUser1["fullname"].hasOwnProperty("lastname"));
