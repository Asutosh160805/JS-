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