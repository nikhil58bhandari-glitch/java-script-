// String
const firstName = 'nike';

const output = firstName;

console.log(output, typeof output);

// Numbers
const age = 30;
const temp = 98.9;
const result = age;
const number = temp;
console.log(result, typeof result);
console.log(number, typeof number);

// Boolean
const haskids = true;
const tell = haskids;
console.log(tell, typeof tell);

// Null 
const aptnumber = null;
const addrs = aptnumber;
console.log(addrs, typeof addrs);

// undefined
// let score;
const score = undefined;
const res = score;
console.log(res, typeof res);

// Symbol
const id = Symbol('id');
const info = id;
console.log(info,typeof info);

// BigInt
const n = 4549745893920720n;
const numm = n;
console.log(numm, typeof numm);

// Reference Types

const pesron = {
    name: 'nikhil',
};
 function sayHello(){
    console.log('hello');
 }

 const say = sayHello;
 console.log(say, typeof say);

 const numbers = [1,2,3,4,5];

const arr = numbers;
console.log(arr, typeof arr);
