'use strict';

const people = [
  {
    name: 'John',
    jobTitle: 'Welder',
  },
  {
    name: 'Mikey',
    jobTitle: 'Dancer',
  },
  {
    name: 'Linda',
    jobTitle: 'Teacher',
  },
  {
    name: 'Tina',
    jobTitle: 'Student',
  },
];

people.forEach(person => 
  console.log(person.name + ": " + person.jobTitle));

