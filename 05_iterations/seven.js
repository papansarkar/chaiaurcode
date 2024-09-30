// map

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const squareValue = myNumbers.map( (num) => num**2 )

// console.log(squareValue);

const evenValue = myNumbers.map( (num) => num%2 == 0 )

// console.log(evenValue); // doesn't return item like filter() instead returns the result of the condition


const squareAddOneEven = myNumbers
                    .map( (num) => num**2 )
                    .map( (num) => num+1 )
                    .filter( (num) => num%2 === 0 )


console.log(squareAddOneEven);                    