// Once you have completed your function, call your function after it was defined, and assign the return value to a variable.
// Afterwards, log that variable to the console.
function addTwoNumbers(num1, num2) {
  const sum = num1 + num2;
  return sum;
}

const sum = addTwoNumbers(5, 6);
console.log(sum);

function convertHoursToMinutes(hours) {
  const minutes = hours * 60;
  return minutes;
}

const minutes = convertHoursToMinutes(4);
console.log(minutes);

function getGreeting(name) {
  const greeting = 'Hello ' + name + ', welcome to our website!';
  return greeting;
}

const greeting = getGreeting('Malcolm');
console.log(greeting);

function multiplyAndDivideBy5(num1, num2) {
  const quotient = (num1 * num2) / 5;
  return quotient;
}

const quotient = multiplyAndDivideBy5(10, 10);
console.log(quotient);

function subtractTwoNumbers(num1, num2) {
  const difference = num1 - num2;
  return difference;
}

const difference = subtractTwoNumbers(5, 3);
console.log(difference);

function getCircleCircumference(radius) {
  const circumference = 2 * 3.14 * radius;
  return circumference;
}

const circumference = getCircleCircumference(8);
console.log(circumference);

function getFullName(firstName, lastName) {
  const fullName = firstName + ' ' + lastName;
  return fullName;
}

const fullName = getFullName('Malcolm', 'Abbott');
console.log(fullName);

function cube(number) {
  const numberCubed = number * number * number;
  return numberCubed;
}

const numberCubed = cube(3);
console.log(numberCubed);
