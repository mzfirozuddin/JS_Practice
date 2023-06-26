//? Object de-structure

const course = {
  courseName: "Js in Hindi",
  price: "999",
  courseInstructor: "Hitesh",
};

// course.courseInstructor

// const { courseName, courseInstructor } = course;

// console.log(courseName);
// console.log(courseInstructor);

//* We can use alise name also
const { courseName: cName, courseInstructor: cInstructor } = course;

console.log(cName);
console.log(cInstructor);

//? JSON
// {
//     "name" : "firoz",
//     "courseName" : "JS",
//     "price" : "free"
// }

//? Array of JSON object
// [
//     {},
//     {},
//     {}
// ]
