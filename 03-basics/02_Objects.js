 //const tinderUser = new Object() // singleton object
 const tinderUser = {} // non singleton object 

 tinderUser.id = "123abc";
 tinderUser.name = "Sammy";
 tinderUser.isLoggedIN = false;

 // console.log(tinderUser);

 const regularUser = {
     email: "some@gamil.com",
     fullname : {
        userfullname : {
            firstname : "hitesh",
            lastname : "yadav"
        }
     }
 }

 console.log(regularUser.fullname.userfullname.firstname);


// if fullname exist nahi karta hai 
 // console.log(regularUser.fullname?.userfullname.firstname)

// objects combine 


const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {3 : "c", 4 : "d"}

const obj3 = {obj1,obj2}; // give object inside object
 const obj4 = Object.assign({},obj1,obj2) // pareinthesis optinal
 const obj5 = {...obj1, ...obj2};
 console.log(obj3);
 console.log(obj4);
 console.log(obj5);

 // array ke ander object 

 const users = [
      {
         name : "anuj", 
         id : "yadav"
      },
 ]

 console.log(users[0].id)

 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser))
 console.log(Object.entries(tinderUser))
 
 console.log(tinderUser.hasOwnProperty('isloggedIN'));

