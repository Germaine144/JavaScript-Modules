// const {add, subtract, multiply, divide, power} = require('./operations');

// const sum = add(10, 5);
// const diff = subtract(10, 5);
// const product = multiply(10, 5);
// const quotient = divide(10, 5);
// const pow = power(2, 3);

// const results = {
//     sum,
//     diff, 
//     product,
//     quotient,
//     pow
// };

// for (const key in results) {
//     console.log(`${key}: ${results[key]}`);
// }

import {add, subtract, multiply, divide, power} from './operations.js';

const sum = add(10, 5);
const diff = subtract(10, 5);
const product = multiply(10, 5);
const quotient = divide(10, 5);
const pow = power(2, 3);

 const results = {
    sum,
    diff, 
    product,
    quotient,
    pow
};
for (const key in results) {
    console.log(`${key}: ${results[key]}`);
}