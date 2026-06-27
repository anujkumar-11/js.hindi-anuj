
// de-structuring 

const course = {
    coursename: "js in hindi", 
    price : 999,
    courseInstructor: "hitesh" 
}

// course.courseInstructor => not so good for always extraction value 

const {courseInstructor: instructor} = course

console.log(courseInstructor);
console.log(instructor);

// destructuring in react 
const navbar = ({company}) => {

}
navbar(company = "anuj")

// API => apna kaam kisi aur pr daal dena ko api kahte hai
       

// json 
//  {
//    " name" : "hitesh",
//     "coursename" : "js in hindi",
//     "price" : "free"
//  }

[
    {},
    {},
    {}
]
