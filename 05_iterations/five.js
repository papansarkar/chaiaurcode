// for each

const coding = ["js", "java", "python", "kotlin", "rust"]

// coding.forEach(function (val) {
//     console.log(val);
// })

// coding.forEach((val)=>{
//     console.log(val);
// })

function printLen(item){
    console.log(item.length);
}

// coding.forEach(printLen)

coding.forEach((item, index, array) => {
    // console.log(index, item, array);
})

const myCoding = [
    {
        lang: "JavaScript",
        ext: "js"
    },
    {
        lang: "Java",
        ext: "java"
    },
    {
        lang: "Python",
        ext: "py"
    },
]

myCoding.forEach( (obj) => {
    // console.log(obj["ext"]);
} )