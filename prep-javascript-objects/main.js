const person = {
  firstName: 'Malcolm',
  lastName: 'Abbott',
  hobby: 'Pickleball',
};
console.log('Information regarding the person: ', person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's full name is: ", fullName);

person.job = 'Student';
console.log("The person's job is: ", person.job);

person['previousJob'] = 'In-house Ambulance Operator EMT';
console.log("The person's previous job was: ", person['previousJob']);
console.log(person);
