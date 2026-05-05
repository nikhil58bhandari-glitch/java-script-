const numbers = [1, 2, 3, 4, 5,6, 7, 8, 9, 10];

const doubledNumbers = numbers.map((number) => 'Number' + number);

console.log(doubledNumbers);

// same with foreach-

const doubledNumbers2 = [];

numbers.forEach((number)=> {
    doubledNumbers2.push(number * 2);
});

console.log(doubledNumbers2);

const companies = [
    {name: 'company One', category: 'finance', start: 1981, end: 2004},
     {name: 'company Two', category: 'Retail', start: 1992, end: 2008},
     {name: 'company Three', category: 'Auto', start: 1999, end: 2007},
     {name: 'company four', category: 'Retail', start: 1989, end: 2010},
     {name: 'company five', category: 'Technology', start: 2009, end: 2014},
     {name: 'company Six', category: 'finance', start: 1987, end: 2010},
     {name: 'company Seven', category: 'Auto', start: 1986, end: 1996},
     {name: 'company Eight', category: 'Technology', start: 2011, end: 2016},
     {name: 'company Nine', category: 'Retail', start: 1981, end: 1989},

];


// Create an array of company names

const companyNames = companies.map((company) => company.name);

console.log(companyNames);

// Create an array with just company and category

const companyInfo = companies.map((company) => {
    return {
        name: company.name,
        category: company.category
    }
});

console.log(companyInfo);

// Create an array of object with the name and length of each company in years 

const companyYears = companies.map((company) => {
return {
    name: company.name,
    length : company.end - company.start + ' years',
};
});

console.log(companyYears);

//Chain map methods

const squareAndDouble = numbers.map((number) => Math.sqrt(number))
.map((sqrt) => sqrt * 2);

const squareAndDouble2 = numbers.map(function (number){
    return Math.sqrt(number);
})
.map(function(sqrt){
    return sqrt * 2;
})

.map(function (sqrtDoubled){
    return sqrtDoubled * 3;
});

console.log(squareAndDouble);

console.log(squareAndDouble2);

// Chaining different methods

const evenDouble = numbers.filter((number) => number % 2 === 0)
.map((number) =>  number * 2);

console.log(evenDouble);

