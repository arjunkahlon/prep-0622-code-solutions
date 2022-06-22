const person = { firstName: 'Steph', lastName: 'Curry', hobby: 'Basketball' };
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log(`The person's name is ${fullName}`);

person.job = 'GSW Point Guard';
console.log(`The person's current job is ${person.job}`);

person.previousJob = 'Davidson Point Guard';
console.group(`The person's previous job is ${person.previousJob}`);

console.log(person);
