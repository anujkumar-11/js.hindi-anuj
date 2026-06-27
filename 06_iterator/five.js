
// for each loop


const coding = ["js", "ruby", "Java","python","cpp"]

// coding.forEach( function (item) {  // in normal function form 

//     console.log(item);
    
// }  )

// // for each in  arrow function
//  coding.forEach((item) =>{
//     console.log(item);
//  })



// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach((item , index , arr)=>{
//     console.log(item ,index , arr);

// })


//  [{} , {}, {}]

const myCoding = [
    {
        languageName : "Javascript",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
       languageName: "java",
       languageFileName: "js"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})






