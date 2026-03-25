const name = "hitesh"
const repoCount =50;

//concatinate
console.log(name + repoCount + " Value"); // outdated
    //modern  backtrick
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

//string declare another method

const gameName = new String('Hitesh-hc')

console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'))

 // go through all string methods

 const newString = gameName.substring(0,4) // substring(startnumber, endnumber)
 console.log(newString);
// slice ke ander hi negative value use kr sakte hai substing me nhi
 const anotherString = gameName.slice(-8,4);

 const newStringOne = "    hitesh    ";
 console.log(newStringOne)
 // trim is used to remove extra spaces
 console.log(newStringOne.trim)

 // replace 

 const url = "https://hitesh.com/hitesh%20choudhary"
 console.log(url.replace('%20','-'));


 // include => used to check is present or not

 console.log(url.includes('hitesh'));

 // to convert int array
   console.log(gameName.split('-'))// '-'=>seperater


   // learn all string method 
   // string ki practice karna hai 

