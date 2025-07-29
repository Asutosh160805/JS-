let score = 33;
console.log(typeof score);
console.log(typeof(score));
let score1 = "33";
console.log(typeof score1);
console.log(typeof(score1));
let score2 = Number(score1);//conversion
console.log(typeof score2);
let score3 = "33abc";
let score4 = Number(score3);//conversion
console.log(typeof score4);
console.log(score4);//NaN => Not a Number
//NaN is a special value in JavaScript that represents a value that is not a legal 
let isLoggedIn = 1;
let booleanLoggedIn = Boolean(isLoggedIn);//conversion
console.log(booleanLoggedIn);//true

//Operations

let value = 3
let negVALUE = -value;//negation
console.log(negVALUE);//-3

let str1 = "Hello";
let str2 = "World";
let str3 = str1 + " " + str2;//concatenation
console.log(str3);//Hello World 

console.log("1" + 2);//"12" => string concatenation
console.log(1 + "2");//"12" => string concatenation
console.log(1+2+"3");//"33" => string concatenation
console.log("1" + 2 + 3);//"123" => string concatenation

