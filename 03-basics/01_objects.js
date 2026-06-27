// objects declare in two ways => lateraand constructor
// singleton => jb constructor se declare karte hai to singleton hota hai
// lateral method se declare karne se singleton nhi banta hai 

// lateral method

// take a symbol and declare as a key 
const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    [mySym]: "myKey1",
    age : 18, 
    location: "jaipur",
    email : "hitesh@google.com",
    isloggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

 console.log(JsUser.email)
 console.log(JsUser["email"]);
 console.log(JsUser[mySym]);


 JsUser.email = "hitesh@chatgpt.com"
 // Object.freeze(JsUser);
 // JsUser.email = "hitesh@googol.com";


 JsUser.greeting = function(){
    console.log("hello Js user");
 }
 JsUser.greetingTwo = function(){
    console.log(`Hello Js user ${this.name}`)
 }

 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());


 

