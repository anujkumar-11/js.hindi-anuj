
// const coding = ["js", "ruby", "Java", "python", "cpp"];

//  const values = coding.forEach( (item)=> {

//     console.log(item);

// })

// console.log(values);

     // FILTER
// const myNums = [1,2,3,4,5,6,7,8,9,10];

// // const newNums = myNums.filter( (num) =>  num>4)

// // console.log(newNums);


// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

// console.log(newNums);

// this is with for each 

// const NewNums = []

// myNums.forEach( (num) =>{
//     if(num>4){
//         NewNums.push(num)
//     }
// } )
// console.log(NewNums);


const books = [
  { title: "book one", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "book tow ", genre: "non Fiction", publish: 1981, edition: 2004 },
  { title: "book three", genre: "History", publish: 1981, edition: 2004 },
  { title: "book four", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "book five", genre: "Science", publish: 1981, edition: 2004 },
  { title: "book six", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "book seven", genre: "History", publish: 1981, edition: 2004 },
  { title: "book eight", genre: "Fiction", publish: 1981, edition: 2004 },

];

const  Userbooks = books.filter( (bk) => bk.genre === 'History' )

console.log(Userbooks);


