const user = {
    username : "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();

// console.log(this); // this will give empty

// function chai(){
//     let username = "hitesh"
//     console.log(this); // this will give many parameter 
//                       // but not username 
//                       // in object only this is used 
// }

 // ******* arrow function *********
 const chai = () => {
    let username = "hitesh";
    console.log(this)

 }

 chai();

    // explicit return 
//  const addTwo = (num1,num2) => {
//     return num1 + num2;
//  }
      // implict return 
//  const addTwo = (num1 , num2) => (num1 + num2)
// this is used with object in function

// const addTwo = (num1,num2 ) => ({username : "hitesh"})


 
// console.log(addTwo(3,4));

// Arrow function apna this create nahi karta — ye parent scope ka this use karta hai.