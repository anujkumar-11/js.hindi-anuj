// shopping cart 
// situation where wo dont have idea to how much parameter is present 

function calculateCartPrice(...num1){  // ... => rest operator
     return num1
}

console.log(calculateCartPrice(200,300,400))


const user = {
    username : "hitesh",
    price : 199
}


function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user);
handleObject({     // direct obj pass bina object banai
    username: "sam",
    price : 399 
})

 const myNewArray = [200,400,100, 600]

 function returnSecondValue(getArray){
        return getArray[0]
 }
 console.log(returnSecondValue(myNewArray));
 console.log(returnSecondValue([200,400,500,1000]))