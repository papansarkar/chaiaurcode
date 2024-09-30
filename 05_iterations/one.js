// for lop

const array = [1, 2, 3, 4, 5]


for (let i = 0; i < array.length; ++i) {
    const element = array[i];
    if (element == 3) {
        console.log(`${element} wooha`)
        // continue
        // break
    }
    console.log(element)
}

// console.log(element); // not accessible in global scope

// cntr + d for duplicating cursor and multi-edit variable names