

// ************* Numbers ************

 const score = 400;
console.log(score);
 const balance = new Number(100);
 console.log(balance);
  console.log(balance.toFixed(1));


 console.log(balance.toString())
 // string me convert krte hai to hamare pass koi interesting 
 // properties aa jaati hai
 console.log(balance.toString.length);
 


 const otherNumber = 23.8966;
 console.log(otherNumber.toPrecision(3))

 
 const hundreds = 1000000;
 console.log(hundreds.toLocaleString('en-IN'))


 // ************ Maths ****************

 console.log(Math);
 console.log(Math.abs(-4));


 console.log(Math.round(4.6));
 // to control top or bottom value 
  // for top value 
  console.log(Math.ceil(4.2));
  // for bottom value 
  console.log(Math.floor(4.9));

console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

// random  its value always lie between 0 to 1 

console.log(Math.random());


//for to 1 to 10 multiply by 10 
console.log((Math.random()*10) +1);
   // to find integer value 
console.log(Math.floor(Math.random()*10) +1);

// value kiske bich me chahiye wo jisse multiply kr rhe hai us pr depend karega 

// trick to define min max;
const min =10;
const max = 20 ;
console.log((Math.floor(Math.random())* (max-min+1)) +min );
