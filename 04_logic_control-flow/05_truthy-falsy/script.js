const email = 'nikkku@gmail.com';

if (email) {
    console.log('you passed in an email');
}

console.log(Boolean(email));

// Falsy Values-
/*
- false
- 0
- "" or '' (Empty string)
- null
- undefined
- NaN
 */

// Truthy Values->
/*
- Everything else that is not falsy
- true
- '0' (0 in a string)
- ' ' (space in a string)
- [] (empty array)
- {} (empty object)
- function () {} (empty function)
*/

/*  - for falsy-
const x = false;
const x = 0;
const x = null;
const x = undefined;
const x = NaN;
const x = '';
*/
/*  for Truthy-
const x = '0';
const x = true;
const x = 'false';
const x = [];
const x = {};
const x = function (){}

if (x){ 
    console.log('this is truthy');
}else {
    console.log('this is falsy');
}

console.log(Boolean(x));
*/

// Truthy and Falsy caveats

//  const children = 2;


// if(children = 2){
//     console.log(`you have ${children} children`);
// } else{
//     console.log('please enter number of children');
// }

// const children = 0;

// if(children){
//     console.log(`you have ${children} children`);
// } else{
//     console.log('please enter number of children');
// }

const children = 0;

// if(children !== undefined ){
if(!isNaN(children)){
    console.log(`you have ${children} children`);
} else{
    console.log('please enter number of children');
}

// Checking for empty arrays

// const posts = ['post one', 'post two'];
// but we  dont have a post
const posts = [];

if(posts.length > 0){
    console.log('List posts');
} else {
    console.log('No Posts to list');
}

// Checking for empty objects->
// const user = {
//     name : 'nikh'
// };

const user = {};

if(Object.keys(user).length > 0){
    console.log('list User');
} else {
    console.log('No User');
}

// Loose Equality (==) ->

console.log(false == 0);
console.log(false === 0);
console.log('' == 0);
console.log('' === 0);
console.log(null == undefined);
console.log(null === undefined);
