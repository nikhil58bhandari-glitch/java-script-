/*
let x;

const todo = new Object();



todo.id = 1;
todo.name = 'buy milk';
todo.completed = false;

x = todo;

const person = {
    address: {
        coords: {
            lat: 42.9384,
            lng: -71.3232
        },
    },
};

x = person.address.coords.lat;

x = person.address.coords.lng;

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const obj3 = {...obj1, ...obj2}; 
const obj4 = Object.assign({}, obj1, obj2);

const todos = [
    {id: 1, name: 'buy Mikl'},
    {id: 2, name: 'pickup kiids from school'},
    {id: 3, name: 'Take out trash'}
];

x = obj4;

x = todos[0].name;

x = Object.keys(todo);

x = Object.keys(todo).length;

x = Object.values(todo);

x = Object.entries(todo);

x = todo.hasOwnProperty('age');

console.log(x);

*/

/*
//     Destructuring & Naming

const firstName = 'nikhil';
const lastName = 'bhandari';
const age = 22;

const  person = {
 firstName,
  lastName,
  age,
};

console.log(person.age);

// Destructuring

const todo = {
    id: 1,
    title: 'take out trash',
    user: {
        name : 'nikhil',
    }
};

const{
    id: todoId,
    title,
    user: { name },
} = todo;

// const id = todo.id;

// const{id , title, user } = todo;

// console.log(id, title, user);

console.log(todoId);

// Destucture Arrays

const numbers = [23,65,44,24];

const [first,second, ...rest] =   numbers;

console.log(first,second, rest);
*/

 //       JSON Intro

 const post = {
    id: 1,
    title: 'post One',
    body: 'This is the body',
 };

 // Convert to JSON string
 const str = JSON .stringify(post);

 // Parse JSON
 const obj = JSON.parse(str);

 const posts = [
    {
        id: 1,
        title: 'Post One',
        body: 'this is the body',
    },
    {
        id: 2,
        title: 'Post two',
        body: 'this is the body',
    },
 ];

 const str2 = JSON.stringify(posts);

 console.log(str2);