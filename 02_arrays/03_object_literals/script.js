// Object Literals-: A Common data structure that holds key/values pairs-
/*
let x;

const person = {
    name: 'nikhil bhandari',
    age: 22,
    isAdmin: true,
    addjress: {
        street: '123 Main st',
        city: 'bosten',
        state : 'MA',
    },
    hobbies: ['music', 'movies', 'trevling', 'sports']
};

x = person.name;
 x = person['age'];
  x = person.addjress.state;
  x = person.hobbies;

  person.name = 'nikku';
  person['isAdmin'] = false;

  delete person.age;

  person.hasChildren = true;

  person.greet = function(){
    console.log(`hello, my name is ${this.name}`);
  };

  person.greet();

  const person2 = {
    'frist name': 'Brad',
    'last name' : 'Traversy',

  }

  x = person2['frist name'];

  // x = person;

console.log(x);
*/

// Q1-: 

// Step 1-
const library = [
    {
        title: 'The Metamorphosis',
        author: 'Kafka',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoecsky',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'White Night',
        author: 'Fyodor Dostoecsk',
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
];

// Step 2-
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// console.log(library);

// Step 3 -

const{  title:firstbook } = library[0];

 console.log(firstbook);

// Step 4-
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);