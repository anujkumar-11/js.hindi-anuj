  
  // object

  const myObject = {
    js: "javascript",
    cpp : "c++",
    rb : "ruby",
    swift: "swift by apple"
  }


  // for in loop 


  for (const key in myObject) {
    // console.log(myObject[key]);

    console.log(`${key} shortcut is for ${myObject[key]}`);
  }

  // for in for array 


  // for in loop se array ke key aati hai 
  // value ke liye array[key] se nikal lenge
  // for of se array ki value aati hai 
  const programming = ["js","rb","py","java","cpp"]
  for (const key in programming) {

    console.log(key);
  }

  // map 

   
   const map = new Map()
   map.set('IN',"india");
   map.set('USA',"United state of americe")
  // map iteratable nhi hota hai
  // for in loop se map ke uppar iterate nhi kr sakte hai

   for (const key in map) {
    console.log(key);
   }



  // object ke uppar => for in loop 
  // array ke uppar => for of loop  