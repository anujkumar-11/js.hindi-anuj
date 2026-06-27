
   // for loop 

//    for (let index = 0; index <10; index++) {
//     const element = index;
//     console.log(element);
    
//    }

  // BREAK and CONTINUE 

  for(let index =1 ;index<=20 ;index++){
    if(index==5){
        console.log(`${index} detected`)
        break;
    }
    console.log(`value of i is ${index}`)
  }

  for(let index = 1 ;index<=20 ; index++){
    if(index==5){
        continue;
    }
    console.log(`value of i is ${index}`)
  }
