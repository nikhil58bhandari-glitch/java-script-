// Values are stored on the stack

const name = 'nikhil';
const age = 22;

// Refrence values are stored on the heap 
const person = {
    name : 'Bhandari',
    age : 25
}

let newName = name;
newName = 'NIKHIL';

let newPerson = person;
newPerson.name = "nikhilBhandari";

console.log(name, newName);
console.log(person, newPerson);
