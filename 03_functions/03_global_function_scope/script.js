// alert('Hello');
// console.log(innerWidth);
/*
const x = 100;

console.log(x, 'in global');

function run(){
    console.log(window.innerHeight);
    console.log(x, 'in function');

}

run();

if(true){
    console.log(x, 'in block');
}

function add() {
    const x = 1;
    const y = 50;
    console.log(x + y);
}

//console.log(y);

add();
*/

//       Block Scope

const x = 100;
const foo = 1;
var bar = 2;

if(true) {
    const y = 200;
    console.log(x + y);
}
// console.log(x+y);

for (let i = 0; i <= 10; i++){
    console.log(i);
}
//  console.log(i);

if(true){
    const a = 500;
    let b = 600;
    var c = 700;
}

// console.log(a);        // it will give you error
// console.log(b);        // it will also give you error
console.log(c);        // it will not give a error becuse of var


function run(){
    var d = 100;
    console.log(d);
}
run();

//console.log(d);