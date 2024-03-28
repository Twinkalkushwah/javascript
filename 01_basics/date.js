//Dates
let myDate=new Date();

console.log("to string "+myDate.toString());
//Mon Mar 18 2024 21:29:57 GMT+0530 (India Standard Time)
console.log();
console.log("to date string "+myDate.toDateString());
//Mon Mar 18 2024
console.log();
console.log("to  ISOS string "+myDate.toISOString());
//2024-03-18T16:01:39.249Z
console.log();
console.log("to JSON "+myDate.toJSON());
//2024-03-18T16:01:39.249Z
console.log();
console.log("to locale date string "+myDate.toLocaleDateString());
//18/3/2024
console.log();
console.log("to locale string "+myDate.toLocaleString());
//18/3/2024, 9:31:39 pm

console.log();
console.log(typeof myDate); //object

let myBirthday=new Date(2003,0,23); //year,month,day --> month index starts from 0 like array
let myBirthday2=new Date(2003,0,23,6,45); //time
let myCreatedDate=new Date("2-01-2023");//MM-DD-YYYY
let mydate2=new Date("2024-01-25");//YYYY-MM-DD
// console.log(myBirthday.toLocaleString());
// console.log(myBirthday2.toLocaleString());
// console.log(myCreatedDate.toLocaleString());
// console.log(mydate2.toLocaleString());

// let myTimeTSamp=Date.now();
// console.log(myTimeTSamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); //convert into seconds

let newDate=new Date();
console.log(newDate);
console.log(newDate.getDay()); // week days in number monday=1 and so on
console.log(newDate.getMonth());//index start from 0
//`` ==> backtick ==> string interpolation

console.log(newDate.toLocaleString('default',{weekday:"long"}));
