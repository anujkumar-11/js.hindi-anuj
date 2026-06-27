

 // reduce 

   const array1 = [1,2,3,4];

   // 0+1+2+3+4
    const initialvalue = 0;
    const sumWithInitial =array1.reduce(
        (accumulator,currentValue) => accumulator + currentValue,
        initialvalue
    );

    console.log(sumWithInitial);


    const myNum = [1,2,3]

    const myTotal = myNum.reduce(function(acc,currvalue) {
        return acc + currvalue
         
    },0)
    console.log(myTotal);



    const shoppingCart = [
      {
        itemName: "js course",
        price: 2000,
      },
      {
        itemName: "data science",
        price: 12999,
      },
    ];

     const priceToPay = shoppingCart.reduce( (acc ,item) => (acc + item.price),0)


     console.log(priceToPay);