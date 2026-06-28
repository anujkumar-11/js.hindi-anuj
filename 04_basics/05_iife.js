

// Immediately Invoked Function Expressions (IIFE)
  //  means jaise aapne function likha immediate run karana hai 
  //  global scope ke pollution se problem hoti hai kai baar to us global scope ke variblse ya jo v declaration hai usko hatane ke liye ye fucntion use kiya jaata hai 


  (function chai(){
       // named IIFE
       console.log(`DB CONNECTED`);
  })();

  ( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
  })('hitesh')   // hitesh => parameter passed
   
