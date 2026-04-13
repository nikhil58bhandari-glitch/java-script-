let x;

const name = 'nikhil';
const age = '22';

x = 'Hello my name is ' + name + ' and i am ' + age + ' years old';

// Template Literals / Templet String
x = `Hello, my name is ${name} and i am ${22} years old`;

// String properties and methods-
 const s = new String ('Hello world');

x = typeof s;

 x = s.length;

 x = s[0];  // Access value by key

 x = s.__proto__;

 x = s.toUpperCase();
 x = s.toLowerCase();

 x = s.charAt(0);

 x = s.indexOf('e');

 x = s.substring(0, 4);

 x = s.substring(7);

 x = s.slice(0, 5);

 x = s.slice(-11, 6);

 x = '             hello nike';
 x = x.trim();

 x = s.replace('world' , 'john');

x = s.includes('helli');

x = s.valueOf();

x = s.split(' ');
x = s.split('');

// console.log(x);
  
// Change the d into upper case -
const myString = 'devloper';

let myNewString;
// solution 1-
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// solution 2-
myNewString = myString[0].toUpperCase() + myString.substring(1);
// solution 3- 
myNewString = `${myString[0].toUpperCase()}${myString.substring(1)}`;

console.log(myNewString);

