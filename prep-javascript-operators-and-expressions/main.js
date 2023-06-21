const number1 = 5;
const number2 = 2;
const product = number1 * number2;

console.log('The Product of number1 and number2 is: ', product);
console.log('The data type of product is: ', typeof product);

const charge = 10;
const payment = 4;
const amountRemaining = charge - payment;

console.log('The amount left to pay is: ', amountRemaining);
console.log('The data type of amountRemaining is: ', typeof amountRemaining);

const tests = 4;
const assignments = 24;
const final = 1;
const grade = (tests + assignments + final) / 3;

console.log('The grade is: ', grade);
console.log('The data type of grade is: ', typeof grade);

const firstName = 'Malcolm';
const lastName = 'Abbott';
const fullName = firstName + ' ' + lastName;

console.log('The full name is: ', fullName);
console.log('The data type of fullName is: ', typeof fullName);

const pH = 30;
const isAcidic = pH < 7;

console.log('Is pH acidic? ', isAcidic);
console.log('The data type of isAcidic is: ', typeof isAcidic);

const numberOfSoldiers = 300;
const isSparta = numberOfSoldiers === 300;

console.log('Has numberOfSoldiers been assigned a value of 300?: ', isSparta);
console.log('The data type of isSparta is: ', typeof isSparta);

let nickname = fullName;
nickname += ' is the GOAT';

console.log('The nickname is: ', nickname);
console.log('The data type of nickname is: ', typeof nickname);
