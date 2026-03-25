//javascrit is dynamic data type 
// dyanamic Type runtime par decide hota hai
            //Variable ka type change ho sakta hai

//2 type of data type 

 //1 => primitive (call by value)
     // string , number , boolean, null , undefined,
     // symbol , bigint

//2 => non primitive (refrence)

     // array , objects , functions


     1 

const score = 100;
const scoreValue = 100.3;

const islogin = false;
const outsidetemp =null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') // both are not same 

console.log(id ===anotherId);

const bigNumber = 3456789754n

 2 

 const heroes = ["shaktiman", "naagraj" , "doga"] //array
 let myObj = {
    name: "hitesh",
    age: 22,     // object
 }

 //function
 const myFunction = function() {
     console.log("Hello world");

 }



 //hw type of all data type with (typeof)
     // Undefinde => undefined
     // Null => object
     // Boolean=> boolean
     //Number=> number
     //String => string 
     // object => object
     // funtion =>function object
     //array=>object;
// dataType of all non_primitive data type is "Object"


// ***************************************************
           //memory
   
 // stack (all the primitive value is found in stack) in this we are given only copy not reference
     
      let myYoutubename = "hiteshchoudhary.com"
      let anothername = myYoutubename;
        anothername = "chaiaurcode"

        console.log(myYoutubename)
        console.log(anothername)



 // Heap ( used in non-primitiv type ) is this reference is given 

      let userOne = {
        email: "user@google.com",
        upi : "user@ybl"
      }

      let userTwo = userOne
      userTwo.email = "hitesh@google.com"

      console.log(userOne.email)
      console.log(userTwo.email);

 





