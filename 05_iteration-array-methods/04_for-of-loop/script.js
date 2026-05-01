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

//  -- For In Loop

const colorobj = {
    color1 : 'red',
    color2 : 'yellow',
    color3 : 'blue',
    color4 : 'pink',
    color5 : 'green'
};

for(const key in colorobj){
    console.log(key, colorobj[key]);
}

const colorArr = ['red', 'green', 'pink', 'yellow', 'blue'];

for(const color in colorArr){
    console.log(color);
}

for(const key in colorArr){
    console.log(colorArr[key]);
}