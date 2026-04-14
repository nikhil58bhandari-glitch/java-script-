/*
let x;

const num = new Number(5.4267);

x = num.toString();

x = num.toString().length;

x = num.toFixed(2);

x = num.toPrecision(3);

x = num.toExponential(2);

x = num.valueOf();

x = Number.MAX_VALUE;
X = Number.MIN_VALUE;

console.log(num)
 console.log(typeof x);
console.log(x);
*/




 // MATH-OBJECTS
/*
 let x;

 x = Math.sqrt(9);

x = Math.abs(-5);

x = Math.round(4.2);

x = Math.ceil(4.2);

x = Math.floor(4.9);

x = Math.pow(2, 3);

x = Math.min(4, 5, 6);

x = Math.max(4, 6, 5);

x = Math.random();

let y = Math.random() * 10 + 1;

y = Math.floor(Math.random() * 100 + 1);

console.log(Math);
console.log(x);
console.log(y);
*/

// Number Challenge

const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

const sum = x + y ;
const sumOutput = `${x} + ${y} = ${sum}`;

const diff = x - y;
const diffOutput = `${x} - ${y} = ${diff}`;

const multi = x * y;
const multiOutput = `${x} * ${y} = ${multi}`;

const div = x / y;
const divOutput = `${x} / ${y} = ${div}`;

console.log(x, y);
console.log(sumOutput);
console.log(diffOutput);
console.log(multiOutput);
console.log(divOutput);