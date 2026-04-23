/*
// Function Declation

console.log(addDollarSign(100));  // we can call function before creating a function it only work in fuction declation 

function addDollarSign(value){
    return '$'+ value;
}

// console.log(addDollarSign(100));

// Function Expression

const addPlusSign = function(value){
    return '+' + value;
};

console.log(addPlusSign(200));
*/

//    Arrow Function

// function add(a, b){
//    return a + b;
// }


// Arrow function syntax
const add = (a, b) => {
    return a + b;
};

console.log(add(1,2));

// Implicit Return 
const subtract = (a, b) => a-b;

console.log(subtract(10,5));

// can leave off () with a single parms
const double = a => a * 2;
console.log(double(10));

// Returning an object

const createObj = () => ({
    name: 'Nikhil',
});

console.log(createObj());

const numbers = [1,2,3,4,6];

numbers.forEach(function (n) {
    console.log(n);
});

// Arrow function in a callback
numbers.forEach((n) => console.log(n));