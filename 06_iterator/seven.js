

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( () => num + 10);

// console.log(newNums);


// for each loop return normally nhi hota hai newarray bna kr usme push karna padtha hai
// filter normally return karta hai 
// map v normally return karta hai 


//  chaining 

  const nuwNums = myNumbers
                          .map( (num) => num*10)
                          .map( (num)=> num+1)
                          .filter( (num) =>num>=40)
