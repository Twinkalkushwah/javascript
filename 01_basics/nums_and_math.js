const score=400;
console.log(score);
const balance=new Number(5030);
console.log(balance);

console.log(balance.toString());
console.log(typeof balance);

const balance1=1298.56;
console.log(balance1.toFixed(3)); //decimal value

const otherNum=123.789;
console.log(otherNum.toPrecision(3));

const num=1000000;
console.log(num.toLocaleString());//in international system
console.log(num.toLocaleString('en-IN'));//in indian system



//-----------------------maths---------------------
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Math.abs(-4));
console.log(Math.round(7.8));
console.log(Math.ceil(7.1));
console.log(Math.floor(7.5));

console.log(Math.min(4,6,8,2,1));
console.log(Math.max(4,6,8,2,1));

console.log(Math.random()); // between 0 to 1
console.log((Math.random()*10) + 1); 

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1)) + min);