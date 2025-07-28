const accountId = 144553; //const means value cant be changed 
let accountEmail = "hello@google.com"//let values can be cahnged
var account = "132435"//var values can be changed
accountCity = "bhubneswar"//not a good practice no const or var used 
//this is how you get a comment the two forward slash :)
//accountId=2 as we are using const this wont work why?? 
//try to remove comment from above and run you will get a error
console.log(accountId);

accountEmail = "bye@gmail.com"
accountPassword = "123456"
accountCity = "Vijayawada"
//we will get no three error in above three lines 
console.log(accountEmail)//here are cahnged still no error
console.table([accountId,accountEmail,account,accountPassword,accountCity])
//gives a table format 
//what is the difference between let and var 
//just read about 'scope in programming' on internet
//we will cover it later :)
//always use let and const 

/* 
NEVER EVER USE VAR
*/
//issue in block scope functional scope 

let accountstat;
console.log(accountstat)//we will get undefined here 
