var person = {
  firstName: 'Tidus',
  lastName: '',
  hobby: 'Blitzball'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;

console.log("The person's name is: ", fullName);

person.job = 'Guardian';

console.log("The person's current job is: ", person.job);

person.previousJob = 'Blitzball Player';

console.log("The person's previous job was: ", person.previousJob);

console.log(person);

var myCar = {
  make: 'Toyota',
  model: 'RAV4',
  year: '2017'
};

console.log(myCar);

myCar['owner'] = 'me';

var fullDetails = 'My car is a ' + myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model'] + ' owned by ' + myCar['owner'] + '.';

console.log(fullDetails);

myCar['color'] = 'Grey';

console.log(myCar);
