const course = {
    courseName: "'js in hindi",
    price: "999",
    courseInstructors: {
        1: "Hitesh",
        2: "Rakesh",
        3: "Mukhesh"
    }
}

// OBJECT DE-STRUCTURING

//these are lengthy process, there is bettter convention below
// course.courseInstructors
// course.courseName
// course.price

//better alternative of object de-structuring

// const {courseInstructors} = course // or const {courseInstructors: instructor} = course, in this case using instructor to access the value

// console.log(courseInstructors);

// const {courseName, price} = course

// console.log(price);
// console.log(courseName);

// REMEMBER : these syntaxs mainly have use cases in importing and exporting objects