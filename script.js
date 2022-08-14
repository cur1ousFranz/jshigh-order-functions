/**
 * Using High Order Functions, forEach, filter, map, sort, reduce
 */
 const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/**
 * Using forEach loop
 */

ages.forEach(age => age >= 20 ? console.log(age) : '');

companies.forEach(company => console.log(company));

companies.forEach(company => console.log(`${company.name} [${company.start} - ${company.end}]`));

/**
 * Using filter() function
 * 
 * filter() function returns an array
 */

const startYear = companies.filter(company => company.start >= 1990);

const lastedTenYears = companies.filter(company => company.end - company.start >= 10);

const greaterThan20 = ages.filter(age => age > 20);

/**
 * Using map() function
 * 
 * map() function returns an array, but based on condition
 * not the entire index
 */

const companyNameCategory = companies.map(company => `${company.name} is about ${company.category}`);

const yearStartEnd = companies.map(company => `[${company.start} to ${company.end}]`);

/**
 * Using sort() function to sort an array
 * 
 * sort() function returns an array in unoriginal form
 */

const sortedAges = ages.sort((a,b) => a - b);

const sortYear = companies.sort((a , b) => a.start > b.start ? 1 : -1);

/**
 * Using reduce() function
 * 
 * reduce() function returns a single value eg. total/sum.
 * 0 parameter should be passed to second parameter
 */
const totalAges = ages.reduce((total, age) => total + age);

const totalCompanyLasted = companies.reduce((total, company) => total + (company.end - company.start), 0);

/**
 * Combining high order functions
 */
const total = ages
    .filter(age => age >= 20 ? age : '')
    .map(age => age * 2)
    .sort((a, b) => a - b)
    .reduce((total, age) => total + age);


console.log(total);

