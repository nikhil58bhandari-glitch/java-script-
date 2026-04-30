console.log(10 < 20 && 30 > 15 && 40 > 30);
console.log(10 > 20 || 30 < 15);

// && -will return first falsy value or the last value
let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 0 && 30;

// console.log(a);

//   const posts = ['post one', 'post two'];
// console.log(posts[0]);

const posts = [];
posts.length > 0 && console.log(posts[0]);

// || - will return the first truthy or the last value

let b;
b = 10 || 20;
b = 0 || 20;
b = 0 || null ||'' || undefined;

console.log(b);

// ?? - Return the rigth side operand when the left is null or undefined

let c;
c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 30;
c = 0 ?? 30;
c = '' ?? 30;
console.log(c);

//   -- Logical Assignment --

// ||= assigns the rigth side value only if the left is falsy value.

let n = false;
// if(!n){
//     n = 10;
// }

 // n = n || 10;

 n ||= 10;
console.log(n);

// &&= assigns the rigth side value only if the left is a truthy value.

let m = 20;
if(m){
    m = 20;
}

m = m && 20;

m  &&= 20;
console.log(m);

// ??= assigns the rigth side value only if the left is null or undefined.

let p = null;

if(p === null || p === undefined ){
    p = 20;
}

p = p ?? 20;

p ??= 20;

console.log(p);
