let score="33abc";

let valueInNumber=Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber); //NaN--> Not a Number
console.log(typeof score);
console.log(typeof(score));
console.log("\n");

////////////////////////////////////
let score1=null;

let valueInNumber1=Number(score1);

console.log(typeof valueInNumber1);
console.log(valueInNumber1); //NaN--> Not a Number
console.log(typeof score1);
console.log(typeof(score1));
console.log("\n");
////////////////////////////////////
let score2=undefined;

let valueInNumber2=Number(score2);

console.log(typeof valueInNumber2);
console.log(valueInNumber2); //NaN--> Not a Number
console.log(typeof score2);
console.log(typeof(score2));
console.log("\n");
//////////////////////////////
let score3=undefined;

let valueInNumber3=Number(score3);

console.log(typeof valueInNumber3);
console.log(valueInNumber3); //NaN--> Not a Number
console.log(typeof score3);
console.log(typeof(score3));
console.log("\n");
console.log(typeof NaN); // type of NaN -->number
//////////////////////////////////
 let isLoggedIn=1;
  let booleanIsLoggedIn=Boolean(isLoggedIn);

  console.log(booleanIsLoggedIn);
  console.log(typeof isLoggedIn);

  //1=> true, 0=>false
  //"" =>false;
  //"Twinkal" =>true
  console.log("\n");

  let someNumber=45;
  let StringNumber=String(someNumber);
  console.log(StringNumber);
  console.log(typeof StringNumber);