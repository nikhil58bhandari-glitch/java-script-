/*
let x;

const  arr = [22, 23,43,5,4,65,34];

arr.push(122);
arr.pop();

arr.unshift(99);
arr.shift();

 //  arr.reverse();

x = arr.includes(23);

x = arr.indexOf(34);
x = arr.indexOf(31);

// x = arr.slice(1,4);
//x = arr.splice(1, 4);

// x = arr.splice(1);

x = arr.splice(1, 4).reverse().toString().charAt(0);


console.log(arr);
console.log(x);
*/

//     Nesting, Concat & Spread
/*
let x;

const fruits = ['apple', 'pear', 'banana', 'orange'];
const berries = ['strawberry', 'blueberry' , 'raseberry'];

//fruits.push(berries);

// x = fruits[4][1];

const allFruits = [fruits, berries];

x = allFruits[1][0];

x = fruits.concat(berries);

// Spread Operator (...)-

x = [...fruits, ...berries];

// Flatten Arrays-

const arr = [1,2,[3,4],5,[6,7],8];
x = arr.flat();

console.log(x);
console.log(x);


// Static Method on Array object 

x = Array.isArray(fruits);
x = Array.isArray('hello');

x = Array.from('12345');

const a = 1;
const b  = 2;
const c = 3;
x = Array.of(a,b,c);

console.log(x);

*/

//  Q1-:arr[1,2,3,4,5]
// result = [6,5,4,3,2,1,0]

const arr = [1, 2, 3, 4, 5];

arr.reverse();
console.log(arr);

arr.push(0);
console.log(arr);

arr.unshift(6);

console.log(arr);

// Q2-:[1, 2, 3, 4, 5];
        //arr2 = [5, 6, 7, 8, 9, 10];
RESULT  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// solution 1
const arr3 = arr1.slice(0, 4).concat(arr2);
console.log(arr3);


// solution 2
const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1);


console.log(arr4);