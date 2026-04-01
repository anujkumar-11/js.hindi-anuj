// dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());
console.log(typeof myDate);

// create own date

// let myCreatedDate = new Date(2023 , 0, 23);
//   let myCreatedDate = new Date(2023,0,23,5,3)
 let myCreatedDate = new Date("2023-01-14");



console.log(myCreatedDate.toDateString());


// time

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
// convert into seconds 
console.log(Math.floor(Date.now()/1000));

// to get particular 
// like only month, day , year 

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay());

// ' ${newDate.getDay()} and the time '


newDate.toLocaleString('default',
    {
        weekday:"short",
        
    }
)