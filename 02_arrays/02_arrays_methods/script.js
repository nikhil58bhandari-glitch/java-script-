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