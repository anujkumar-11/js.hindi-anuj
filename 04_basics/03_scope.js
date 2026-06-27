// var c = 300;

// if(true) {
//     let a = 10
//     const b = 20 
//     var c = 100
// }
// console.log(a) // error 
// console.log(c) // output =100;
// // isiliye var ka use nhi karte hai 


// closer => child fuction hai parents ke element ko access kr pata hai 

// nested_scope

function one () {
    const username = "hitesh"
    function two() {
        const website = "youtube"
        console.log(username)
        }
        // console.log(website);

        two()
}

one()

if(true){
    const username = "hitesh";
    if(username === "hitesh"){
        const website = " Youtube"
        console.log(username + website)
    }

    // console.log(website);
}

// console.log(username);


// *************** Interesting **************

console.log(addone(5));

// in this type of fuction declaration
// we can access function before declaration
function  addone(num){
    return num + 1
}


// in this type  we cant access function before declartion 
// addTwo(5) = > error dega 
const addTwo = function(num){
    return num + 2

}
 addTwo(5) // correct method 
 