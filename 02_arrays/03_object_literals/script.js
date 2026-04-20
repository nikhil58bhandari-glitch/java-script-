// Object Literals-: A Common data structure that holds key/values pairs-

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