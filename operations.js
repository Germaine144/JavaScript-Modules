export function validateNumbers(...args){
    return args.every(num => typeof num === 'number' && !isNaN(num));
}
export function add(a,b){
    if(!validateNumbers(a,b)){
        throw new Error('Invalid input: Both arguments must be numbers.');
        }
    return a + b;
}

export function subtract(a,b){
    if(!validateNumbers(a,b)){
        throw new Error('Invalid input: Both arguments must be numbers.');
        }
    return a - b;
}

export function multiply(a,b){
    if(!validateNumbers(a,b)){
        throw new Error('Invalid input: Both arguments must be numbers.');
        }
    return a * b;
}
export function divide(a,b){
    if(!validateNumbers(a,b)){
        throw new Error('Invalid input: Both arguments must be numbers.');
        }
    if(b === 0){
        throw new Error('Division by zero is not allowed.');
    }
    return a / b;
}

 export function power(a,b){
    if(!validateNumbers(a,b)){
        throw new Error('Invalid input: Both arguments must be numbers.');
        }   
    return Math.pow(a,b);
}

// module.exports = {
//     add,
//     subtract,
//     multiply,
//     divide,
//     power
// };