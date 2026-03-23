const accountId = 1444
let accountEmail = "anuj1192004@gamil.com"
var accountpassword="12345"
accountCity="Jaipur"
let accountState;

// accountId=2 not valid

/*
prefer not to use var because of
 issue in block scope and 
 functional scope 
*/

accountEmail="hc@hc.com"
accountpassword="232323"
accountCity="patna"

console.log(accountId);
console.table([accountId,accountEmail,accountpassword,accountCity,accountState])