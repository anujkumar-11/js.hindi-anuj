function sayMyName (){
    console.log("h");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}

// sayMyName ==> this is function refrence 
// sayMyName() ==> this is fuction execution

sayMyName();


// function addTwoNumbers(number1,number2){ // number1 and number2 => called parameters 

//     console.log(number1+ number2);
// }
// addTwoNumbers(3,"a"); // 3 , a => called arguments 

function addTwoNumbers(number1, number2) {

  let result = number1 + number2
  return result
 
}
const result = addTwoNumbers(3,5)
console.log("result : ", result )


function loginUserMessage(username="sam"){  // username ="sam" default value 
    if(username === undefined){  // default value de diye hai to is me kabhi aaiange hi nhi 
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`

}


 console.log(loginUserMessage("hitesh"));  

function loginUserMessage(username){  
    if(username === undefined){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`

}

 console.log(loginUserMessage("hitesh")); // jb isme koi value nhi pass karenge to undefined aaiga




