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