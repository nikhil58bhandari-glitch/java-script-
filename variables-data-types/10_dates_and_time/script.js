/*
let d;

d = new Date();

d = d.toString();

d = new Date(2023, 0, 10);

d = new Date('2021-07-10');
d = new Date('7/1/2023 12:30:00');
d = new Date('2023-07-10');

d = Date.now();

d = new Date();
d = d.getTime();
d = d.valueOf();


d = Math.floor(Date.now() / 1000);

console.log(typeof d);
console.log(d);
*/


// Dates object method

let x;
let d = new Date();

x = d.toString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear();
x = d.getMonth();
x= d.getMonth() + 1;

x = d.getDate();
x = d.getDay();

x = d.getHours();

x = d.getSeconds();

x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() +1}-${d.getDate()}`;

x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('default').format(d);
x = Intl.DateTimeFormat('defult', {month: 'long' }).format(d);
x = d.toLocaleString('default', {month: 'long'});
x = d.toLocaleString('default',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timezone: 'India/Uttrakhand',
});


console.log(x);