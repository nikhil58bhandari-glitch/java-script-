const numbers = [1,2,3,4,5,6,7,8,9,10];

// const evenNumbers = numbers.filter(function(number){
//     return number % 2 === 0;
// });

// Short Version
// const evenNumbers = numbers.filter((number) => number % 2 === 0);


// Same with ForEach
// let evenNumbers = [];
// numbers.forEach(number => {
//     if(number % 2 === 0){
//         evenNumbers.push(number);
//     }
// });

// console.log(evenNumbers);


const companies = [
    {name: 'company One', category: 'finance', start: 1981, end: 2004},
     {name: 'company Two', category: 'Retail', start: 1992, end: 2008},
     {name: 'company Three', category: 'Auto', start: 1999, end: 2007},
     {name: 'company four', category: 'Retail', start: 1989, end: 2010},
     {name: 'companyfive ', category: 'Technology', start: 2009, end: 2014},
     {name: 'company Six', category: 'finance', start: 1987, end: 2010},
     {name: 'company Seven', category: 'Auto', start: 1986, end: 1996},
     {name: 'company Eight', category: 'Technology', start: 2011, end: 2016},
     {name: 'company Nine', category: 'Retail', start: 1981, end: 1989},

];

// Get only retail compaines

const retailCompanies = companies.filter(
    (company) => company.category === 'Retail'
);
console.log(retailCompanies);

// Get comapanies that started inor after 1980 and ended in or before 2005

const earlyCompaines = companies.filter(
    (company) => company.start >= 1980 && company.end <= 2005
);

console.log(earlyCompaines);

// get company that lasted 10 years or more-

const longCompaibes = companies.filter(
    (company) => (company.end - company.start >= 10)
);
console.log(longCompaibes);

