let x;

// Array Literal

const numbers = [12,23,34,56,78,98];
const mixed = [12,'apple', true, null];

// Array Constructor

const Fruit = new Array('apple', 'grape', 'orange');

x = numbers[0];

x = numbers[0] + numbers[3];

x = `my favorite fruit is ${Fruit[0]}`;

x = numbers.length;

Fruit[2] = 'pear';

// Fruit.length = 2;

Fruit[3] = 'straberry';
Fruit[Fruit.length] = 'blueberry';

console.log(x);
console.log(mixed);
console.log(numbers);
console.log(Fruit);