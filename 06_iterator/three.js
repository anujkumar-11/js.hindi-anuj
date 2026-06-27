


 // ["", "" , ""] 
 // [{}, {}, {}]

 const arr = [1,2,3,4,5]

// for of loop 

// for (const element of arr) {
//     console.log(element); 
// }

// const  str= "anujyadav";
// for (const element of str) {
//     console.log(`Each char is ${element}`);  
// }

//   Maps 
// unique key value pair hota hai

  const map = new Map()
  map.set('IN', "India")
  map.set('USA',"United State Of America")
  map.set('Fr',"France")

  console.log(map);

//   for(const key of map){
//     console.log(key);
//   }

  // if u want only key value alag alag 

   for (const [key , value] of map) {
     console.log(key, ':-',value);
   }

// for of on Object

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
    
}

for (const element of myObject) {
    console.log(element);
    
}

// for of loop se object iteratable nhi hai 
// for of loop se object nhi iterate hoga 


