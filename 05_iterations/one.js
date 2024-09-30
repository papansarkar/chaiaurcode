// for lop

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// for (let i = 0; i < array.length; ++i) {
//     const element = array[i];
//     if (element == 3) {
//         console.log(`${element} wooha`)
//         // continue
//     }
//     console.log(element)
// }

// console.log(element); // not accessible in global scope

// cntr + d for duplicating cursor and multi-edit variable names

// for (let i = 0; i < 3; i++) {
//     console.log(`Outer loop value : ${i}`);
//     for (let j = 0; j < myArray.length; j++) { 
//         // notice: there is no error for array[5] value...crazy fact: Typescript didn't throw an error.
//         const element = myArray[j];
//         console.log(element*element)
//     }
    
// }

for (let i = 0; i < array.length; ++i) {
    const element = array[i];
    if (element == 3) {
        console.log(`${element} wooha`)
        // continue
    }
    console.log(element)
}