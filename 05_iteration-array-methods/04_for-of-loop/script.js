const items = ['book', 'table', 'chair', 'kite', 'computer' ];

// for (let i = 0; i < items.length; i++){
//     console.log(items[i]);
// }

for(const item of items){
    console.log(item);
}

const users = [
    {name : 'Luffy'},
    {name : 'Zoro'},
    {name : 'Sanji'},
    {name : 'Nmai'}
];
for(const user of users){
    console.log(user.name);
}

// Loop Over Strings-:

const str = 'Hello World';

for(const letter of str){
    console.log(letter);
}

// Loop over Maps-:

const map = new Map();
map.set('name', 'Naruto');
map.set('age', 17);

for(const [key, value] of map ){
    console.log(key,value);
}