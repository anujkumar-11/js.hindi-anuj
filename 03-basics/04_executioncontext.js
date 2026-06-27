 // Javascript execution context 

 // js run in two ways 

 // Global execution context 
 // Functional execution context 
 // eval execution context 

 // [ {}] box =>  memory creation phase => jo v variable create hota hai unko memory allocate hota hai only 
         //   => execution phase 

         let val1 = 10 
         let val2 = 5 
         function addNum(num1,num2){
            let total = num1 + num2
            return total
         }

         let result1 = addNum(val1,val2)
         let result2 = addNum(10,2)

// 1 => global execution -> allocate in this
// 2=> memory creation phase -> 
          // val1 -> undefined
          // val2 -> undefined
          // addNum-> defination
         // result1 -> undefined
         // result2 -> undefined
// 3=> execution phase -> 
       // val1 => 10
      // val2 => 5
     // at result1 => addNum => [ here formed => new variable environment + execution thread] => new box tiyar hua hai to phir se memory phase aur execution phase hoga 
                                // memory phase 
                                   // val1 ->undefined
                                   //val2 -> undefined
                                   // total ->undefined
                                // execution context
                                   // num1=10
                                   //num2=5
                                   //total=15
                                   // total return to global executional context 
                                   // after that [] => deleted
    // at result2 => addNum => same as result 1 occur    
     
    
// call stack 



                 // two()
                  //one()
                 // global execution


   