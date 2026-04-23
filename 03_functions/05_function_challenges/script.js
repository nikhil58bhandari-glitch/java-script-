// Q1- create a function called getClesius() that takes  a temperature in Fahrenheit as an argument and return the temprerature in celsius.

// function getCelesius(f){
//     const celsius = (f - 32) * 5/9;
//     return celsius;
// }
// console.log(getCelesius(50));

// Arrow function

const getCelsius = (f) => ((f-32) * 5) / 9;
console.log(`the temp is ${getCelsius(32)} \xB0C `);

// Q2-: Create an arrow function called minMax() that takes in an array of numbers and returns an object with the minimum and maximum numbers in the arrays-

function minMax(arr){
 const min = Math.min(...arr);
 const max = Math.max(...arr);

 return{
    min,
    max
 }
}

console.log(minMax([1,2,3,4,5]));


// Q3-: Create an IIFE(immediately Invoke Function Expression) that takes in the length and width of a rectangle output it to the console in a message  as soon as the page loads.

((length,width) => {
    const area = length * width;

    const output = `the area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`

    console.log(output);

})(20, 10);

