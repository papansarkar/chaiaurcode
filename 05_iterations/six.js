// filter, 

const coding = ["js", "java", "python", "kotlin", "rust"]

// const values = coding.forEach( (item) => {
//     return item //limitation od forEach()
// } )

// console.log(values); // doesn't work

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numFive = myNums.filter( (item, index, array) => (item > 5) )

// console.log(numFive);

const units = ["kg", "mm", "cm", "ml", "m", "gm"]

const myUnits = units.filter( (unit) => {
    if (unit != "kg" && unit != "gm") {
        return unit
    }
} )

// console.log(myUnits);

// using forEach

const myUnits1 = []

units.forEach(( item ) => {
    if ( item != "kg" && item != "gm" ){
        myUnits1.push(item)
    }
})

// console.log(myUnits1);

const books = [
    {
        title: 'book1',
        genre: "fiction",
        edition: 1900,
        publish: 2000,
    },
    {
        title: 'book2',
        genre: "health",
        edition: 2012,
        publish: 1999,
    },
    {
        title: 'book3',
        genre: "non-fiction",
        edition: 1900,
        publish: 2003,
    },
    {
        title: 'book4',
        genre: "history",
        edition: 2014,
        publish: 2005,
    },
    {
        title: 'book5',
        genre: "science",
        edition: 2013,
        publish: 1980,
    },
    {
        title: 'book6',
        genre: "law",
        edition: 1900,
        publish: 2023,
    },
    {
        title: 'book7',
        genre: "history",
        edition: 1999,
        publish: 2023,
    },
]

const myBooks = books.filter( (book) => {
    if( book.edition > 1900 && book.publish > 2012 ){
        return book
    }
} )

// console.log(myBooks);


const historyBooks = books.filter( (book) => book.genre === 'history' )

console.log(historyBooks);