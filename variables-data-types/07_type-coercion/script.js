// Type Coercion it happpen when you apply operator to values that have different types

let x;

x = 5 +'5';  // 55 string
x = 5 + Number('5'); // 10 number

x = 5 * '5'; // 25 number

x = 5 + null;

x = Number(null);

x = Number(true);
x = Number(false);

x = 5 + true;

x = 5 + false;

x = 5 + undefined;

console.log(x, typeof x);