let score = "33abs"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);

console.log(typeof valueInNumber)
console.log(valueInNumber)


/*
  "33"=>33
  "33abs"=>NaN
  true=>1 false=>0

*/
  //boolean
let isloggedIn=1

let booleanIsLoggedIn = Boolean(isloggedIn)
console.log(booleanIsLoggedIn);


// 1=>true 0=>false
// ""=>false
// "hitesh"=>true

   //string conversion
   let somenumber=33;
   let stringNUMber=String(somenumber)
   console.log(stringNUMber)
   console.log(typeof stringNUMber);



  //  ********* OPERATIONS *******
        
  let value =3
  let negvalue = -value
  console.log(negvalue)

  console.log(2+2);
   console.log(2-2);
    console.log(2*2);
     console.log(2**3);
     console.log(2/3)
     console.log(2%3)

     let str1="hello"
     let str2=" Hitesh"
     let str3 = str1 + str2;
     console.log(str3);

     console.log("1" + 2)
     console.log(1 + "2")
     console.log("1" + 2 + 2)
     console.log(1 + 2 +"3")

     console.log( 3+ 4 *5 % 3)// ues parnthesis instead of this 

     console.log(true) //output =>> true;
     console.log(+true)//output =>> 1;
     console.log(+"") //output =>> 0;

     // assignment operatot

     let num1, num2, num3
     num1=num2=num3=2+2;
     let gamecounter =100;
     gamecounter++;
     console.log(gamecounter);
      


// link to study conversion
//https:tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

