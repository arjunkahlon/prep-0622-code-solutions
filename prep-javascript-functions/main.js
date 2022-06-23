function addTwoNumbers(x, y) {
  return x + y;
}

function convertHoursToMinutes(hours) {
  return hours * 60;
}

function getGreeting(name) {
  return 'Hello ' + name;
}

function addAndMultiplyBy5(num1, num2) {
  return 5 * (num1 + num2);
}

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

function cube(number) {
  return number * number * number;
}

var sum = addTwoNumbers(2, 2);
console.log('sum', sum);

var minutes = convertHoursToMinutes(2);
console.log('minutes', minutes);

var greeting = getGreeting('World!');
console.log(greeting);

// For simplicity, I placed the remaining function calls inside console log.

console.log(addAndMultiplyBy5(10, 5));
console.log(multiplyAndDivideBy5(35, 10));
console.log(subtractTwoNumbers(22, 7));
console.log(getCircleCircumference(5));
console.log(getFullName('Juan', 'Ramirez'));
console.log(cube(5));
